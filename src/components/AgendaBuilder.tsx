import { useEffect, useMemo, useRef, useState } from 'react';
import { engSessions } from '../data/engAgenda';
import type { ExportData } from '../utils/exportAgenda';

const STORAGE_KEY = 'campair-eng-agenda-v2';

const DAYS = [
  { key: 'mon', label: 'Monday' },
  { key: 'tue', label: 'Tuesday' },
  { key: 'wed', label: 'Wednesday' },
  { key: 'thu', label: 'Thursday' },
  { key: 'fri', label: 'Friday' },
] as const;

// Two morning session slots per day.
const AM_SLOTS = ['am1', 'am2'] as const;

// Locked, non-configurable sessions and where they sit.
const FIXED: Record<string, string> = {
  'mon-am1': 'eng-1-kickoff',
  'fri-am2': 'eng-11-gemba-walk',
};

const ALL_SLOTS = DAYS.flatMap((d) => AM_SLOTS.map((p) => `${d.key}-${p}`));
const OPEN_SLOTS = ALL_SLOTS.filter((s) => !(s in FIXED));

const configurableSessions = engSessions.filter(
  (s) => !Object.values(FIXED).includes(s.id)
);

const sessionsById = new Map(engSessions.map((s) => [s.id, s]));

// The Practice Labs resource for a session (consistently titled "Practice Labs").
const labBySession = new Map(
  engSessions.map((s) => [s.id, s.resources.find((r) => r.title === 'Practice Labs')])
);

const resourceUrl = (sessionId: string, title: string): string | undefined =>
  sessionsById.get(sessionId)?.resources.find((r) => r.title === title)?.url;

type Assignments = Record<string, string | null>;

const emptyAssignments = (): Assignments =>
  OPEN_SLOTS.reduce((acc, s) => {
    acc[s] = null;
    return acc;
  }, {} as Assignments);

function loadAssignments(): Assignments {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyAssignments();
    const parsed = JSON.parse(raw) as Assignments;
    const base = emptyAssignments();
    const validIds = new Set(configurableSessions.map((s) => s.id));
    const seen = new Set<string>();
    for (const slot of OPEN_SLOTS) {
      const val = parsed[slot];
      if (val && validIds.has(val) && !seen.has(val)) {
        base[slot] = val;
        seen.add(val);
      }
    }
    return base;
  } catch {
    return emptyAssignments();
  }
}

interface DragPayload {
  sessionId: string;
  origin: string; // 'pool' or a slot id
}

export function AgendaBuilder() {
  const [assignments, setAssignments] = useState<Assignments>(loadAssignments);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const dragData = useRef<DragPayload | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [assignments]);

  const pool = useMemo(() => {
    const placed = new Set(Object.values(assignments).filter(Boolean) as string[]);
    return configurableSessions.filter((s) => !placed.has(s.id));
  }, [assignments]);

  const sessionAt = (slotId: string): string | null =>
    FIXED[slotId] ?? assignments[slotId] ?? null;

  const handleDragStart = (e: React.DragEvent, sessionId: string, origin: string) => {
    const payload: DragPayload = { sessionId, origin };
    dragData.current = payload;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', JSON.stringify(payload));
    setDragging(sessionId);
  };

  const handleDragEnd = () => {
    dragData.current = null;
    setDragging(null);
    setDragOver(null);
  };

  const readPayload = (e: React.DragEvent): DragPayload | null => {
    if (dragData.current) return dragData.current;
    try {
      return JSON.parse(e.dataTransfer.getData('text/plain')) as DragPayload;
    } catch {
      return null;
    }
  };

  const dropOnSlot = (e: React.DragEvent, targetSlot: string) => {
    e.preventDefault();
    setDragOver(null);
    const payload = readPayload(e);
    if (!payload) return;
    const { sessionId, origin } = payload;
    if (origin === targetSlot) return;

    setAssignments((prev) => {
      const next = { ...prev };
      const displaced = next[targetSlot] ?? null;
      next[targetSlot] = sessionId;
      if (origin !== 'pool') {
        next[origin] = displaced; // swap (may be null)
      }
      return next;
    });
  };

  const dropOnPool = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(null);
    const payload = readPayload(e);
    if (!payload) return;
    if (payload.origin === 'pool') return;
    setAssignments((prev) => ({ ...prev, [payload.origin]: null }));
  };

  const handleReset = () => setAssignments(emptyAssignments());

  const buildExportData = (): ExportData => {
    const days = DAYS.map((d) => {
      const sessions = AM_SLOTS.map((p) => sessionAt(`${d.key}-${p}`))
        .filter(Boolean)
        .map((id) => {
          const s = sessionsById.get(id as string)!;
          return {
            title: s.title,
            recording: resourceUrl(s.id, 'Session Recording'),
            presentation: resourceUrl(s.id, 'Presentation'),
            labs: labBySession.get(s.id)?.url,
          };
        });
      return { label: d.label, sessions };
    });
    return { days, unscheduled: pool.map((s) => s.title) };
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const { exportAgendaDocx } = await import('../utils/exportAgenda');
      await exportAgendaDocx(buildExportData());
    } catch (err) {
      console.error('Agenda export failed', err);
    } finally {
      setExporting(false);
    }
  };

  const stopDrag = (e: React.MouseEvent | React.DragEvent) => e.stopPropagation();

  const renderCardLinks = (sessionId: string) => {
    const recording = resourceUrl(sessionId, 'Session Recording');
    const presentation = resourceUrl(sessionId, 'Presentation');
    if (!recording && !presentation) return null;
    return (
      <div className="agenda-builder__card-links">
        {recording && (
          <a
            className="agenda-builder__card-link"
            href={recording}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            onClick={stopDrag}
            onDragStart={stopDrag}
          >
            🎬 Recording
          </a>
        )}
        {presentation && (
          <a
            className="agenda-builder__card-link"
            href={presentation}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            onClick={stopDrag}
            onDragStart={stopDrag}
          >
            📊 Presentation
          </a>
        )}
      </div>
    );
  };

  const renderCard = (sessionId: string, origin: string, locked = false) => {
    const session = sessionsById.get(sessionId);
    if (!session) return null;
    return (
      <div
        className={
          'agenda-builder__card' +
          (locked ? ' agenda-builder__card--locked' : '') +
          (dragging === sessionId ? ' agenda-builder__card--dragging' : '')
        }
        draggable={!locked}
        onDragStart={locked ? undefined : (e) => handleDragStart(e, sessionId, origin)}
        onDragEnd={locked ? undefined : handleDragEnd}
        title={locked ? 'This session is fixed and cannot be moved' : 'Drag to rearrange'}
      >
        <div className="agenda-builder__card-head">
          <span className="agenda-builder__card-icon">{locked ? '🔒' : '⠿'}</span>
          <span className="agenda-builder__card-title">{session.title}</span>
        </div>
        {renderCardLinks(sessionId)}
      </div>
    );
  };

  const renderSlot = (slotId: string) => {
    const fixedSession = FIXED[slotId];
    if (fixedSession) {
      return (
        <div className="agenda-builder__slot agenda-builder__slot--locked">
          {renderCard(fixedSession, slotId, true)}
        </div>
      );
    }
    const sessionId = assignments[slotId];
    return (
      <div
        className={
          'agenda-builder__slot' +
          (sessionId ? ' agenda-builder__slot--filled' : ' agenda-builder__slot--empty') +
          (dragOver === slotId ? ' agenda-builder__slot--dragover' : '')
        }
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(slotId);
        }}
        onDragLeave={() => setDragOver((cur) => (cur === slotId ? null : cur))}
        onDrop={(e) => dropOnSlot(e, slotId)}
      >
        {sessionId ? (
          renderCard(sessionId, slotId)
        ) : (
          <span className="agenda-builder__slot-hint">Drop a session</span>
        )}
      </div>
    );
  };

  const renderMarker = (icon: string, title: string, sub: string, compact = false) => (
    <div className={'agenda-builder__marker' + (compact ? ' agenda-builder__marker--compact' : '')}>
      <span className="agenda-builder__marker-icon">{icon}</span>
      <span className="agenda-builder__marker-text">
        <span className="agenda-builder__marker-title">{title}</span>
        {!compact && <span className="agenda-builder__marker-sub">{sub}</span>}
      </span>
    </div>
  );

  const renderLab = (dayKey: string) => {
    const morning = AM_SLOTS.map((p) => sessionAt(`${dayKey}-${p}`)).filter(Boolean) as string[];
    if (morning.length === 0) {
      return <span className="agenda-builder__lab-hint">Labs appear here</span>;
    }
    return morning.map((sessionId, i) => {
      const session = sessionsById.get(sessionId);
      const lab = labBySession.get(sessionId);
      const label = session ? session.title : 'Session';
      if (lab?.url) {
        return (
          <a
            key={`${dayKey}-lab-${i}`}
            className="agenda-builder__lab-card"
            href={lab.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${label} — Practice Labs`}
          >
            <span className="agenda-builder__lab-icon">🧪</span>
            <span className="agenda-builder__lab-text">
              <span className="agenda-builder__lab-session">{label}</span>
              <span className="agenda-builder__lab-name">Practice Labs</span>
            </span>
          </a>
        );
      }
      return (
        <div
          key={`${dayKey}-lab-${i}`}
          className="agenda-builder__lab-card agenda-builder__lab-card--none"
          title={`${label} — no lab packet`}
        >
          <span className="agenda-builder__lab-icon">—</span>
          <span className="agenda-builder__lab-text">
            <span className="agenda-builder__lab-session">{label}</span>
            <span className="agenda-builder__lab-name">No lab packet</span>
          </span>
        </div>
      );
    });
  };

  return (
    <section className="agenda-builder">
      <div className="agenda-builder__header">
        <div>
          <h3 className="agenda-builder__title">Build Your Weeklong Agenda</h3>
          <p className="agenda-builder__subtitle">
            Drag sessions into the two morning (AM) slots for each day. After lunch, the
            afternoon (PM) automatically fills with the matching Practice Labs for each
            morning session. Kickoff opens Monday and the Gemba Walk closes Friday—both fixed.
          </p>
        </div>
        <div className="agenda-builder__actions">
          <button
            type="button"
            className="agenda-builder__export"
            onClick={handleExport}
            disabled={exporting}
          >
            {exporting ? 'Exporting…' : '⬇ Export & Save'}
          </button>
          <button type="button" className="agenda-builder__reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="agenda-builder__layout">
        <div
          className={
            'agenda-builder__pool' +
            (dragOver === 'pool' ? ' agenda-builder__pool--dragover' : '')
          }
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver('pool');
          }}
          onDragLeave={() => setDragOver((cur) => (cur === 'pool' ? null : cur))}
          onDrop={dropOnPool}
        >
          <h4 className="agenda-builder__pool-title">
            Unscheduled <span className="agenda-builder__pool-count">{pool.length}</span>
          </h4>
          <div className="agenda-builder__pool-list">
            {pool.length === 0 ? (
              <span className="agenda-builder__pool-empty">All sessions scheduled</span>
            ) : (
              pool.map((s) => renderCard(s.id, 'pool'))
            )}
          </div>
        </div>

        <div className="agenda-builder__grid">
          {DAYS.map((day) => (
            <div key={day.key} className="agenda-builder__day">
              <div className="agenda-builder__day-label">{day.label}</div>

              <div className="agenda-builder__marker-slot">
                {day.key !== 'mon'
                  ? renderMarker('🔁', 'Recap of Previous Day', 'Discuss yesterday first')
                  : null}
              </div>

              <div className="agenda-builder__period">
                <span className="agenda-builder__period-label">AM</span>
                {renderSlot(`${day.key}-am1`)}
              </div>

              <div className="agenda-builder__marker-slot">
                {renderMarker('☕', '15-Minute Break', 'Between sessions', true)}
              </div>

              <div className="agenda-builder__period">
                <span className="agenda-builder__period-label">AM</span>
                {renderSlot(`${day.key}-am2`)}
              </div>

              <div className="agenda-builder__lunch">
                <span className="agenda-builder__lunch-icon">🍽️</span> Lunch
              </div>

              <div className="agenda-builder__pm">
                <span className="agenda-builder__period-label">PM · Practice Labs</span>
                <div className="agenda-builder__lab-list">{renderLab(day.key)}</div>
              </div>

              <div className="agenda-builder__marker-slot">
                {renderMarker('📣', 'Practice Shareout', 'Share lab outputs')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
