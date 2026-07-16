import { useEffect, useMemo, useRef, useState } from 'react';
import { engSessions } from '../data/engAgenda';

const STORAGE_KEY = 'campair-eng-agenda-v1';

const DAYS = [
  { key: 'mon', label: 'Monday' },
  { key: 'tue', label: 'Tuesday' },
  { key: 'wed', label: 'Wednesday' },
  { key: 'thu', label: 'Thursday' },
  { key: 'fri', label: 'Friday' },
] as const;

const PERIODS = [
  { key: 'am', label: 'AM' },
  { key: 'pm', label: 'PM' },
] as const;

// Locked, non-configurable sessions and where they sit.
const FIXED: Record<string, string> = {
  'mon-am': 'eng-1-kickoff',
  'fri-pm': 'eng-11-gemba-walk',
};

const ALL_SLOTS = DAYS.flatMap((d) => PERIODS.map((p) => `${d.key}-${p.key}`));
const OPEN_SLOTS = ALL_SLOTS.filter((s) => !(s in FIXED));

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
    // Rebuild against current open slots so schema changes can't corrupt state.
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

const configurableSessions = engSessions.filter(
  (s) => !Object.values(FIXED).includes(s.id)
);

const sessionsById = new Map(engSessions.map((s) => [s.id, s]));

interface DragPayload {
  sessionId: string;
  origin: string; // 'pool' or a slot id
}

export function AgendaBuilder() {
  const [assignments, setAssignments] = useState<Assignments>(loadAssignments);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);
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
        // Swap: whatever was in the target moves to the source slot (may be null).
        next[origin] = displaced;
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

  const handleReset = () => {
    setAssignments(emptyAssignments());
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
        <span className="agenda-builder__card-icon">{locked ? '🔒' : '⠿'}</span>
        <span className="agenda-builder__card-title">{session.title}</span>
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

  return (
    <section className="agenda-builder">
      <div className="agenda-builder__header">
        <div>
          <h3 className="agenda-builder__title">Build Your Weeklong Agenda</h3>
          <p className="agenda-builder__subtitle">
            Drag sessions into the week to design a delivery sequence. Kickoff opens Monday
            and the Gemba Walk closes Friday—both are fixed. Each day holds up to two sessions.
          </p>
        </div>
        <button type="button" className="agenda-builder__reset" onClick={handleReset}>
          Reset
        </button>
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
              {PERIODS.map((p) => {
                const slotId = `${day.key}-${p.key}`;
                return (
                  <div key={slotId} className="agenda-builder__period">
                    <span className="agenda-builder__period-label">{p.label}</span>
                    {renderSlot(slotId)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
