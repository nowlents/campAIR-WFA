import { useState, useCallback } from 'react';
import reviewData from '../data/content-review.json';

type Severity = 'info' | 'warning' | 'critical';
type FindingStatus = 'current' | 'review-suggested' | 'outdated';
type MaterialType = 'deck' | 'guide' | 'lab' | 'video' | 'document';
type ResolutionAction = 'implemented' | 'rejected';

/* ── History tracking ─────────────────────────────────────────────── */

interface HistoryEntry {
  scanDate: string;
  status: FindingStatus;
  finding: string;
  suggestedAction: string | null;
  resolution: ResolutionAction | null;
  resolvedAt: string | null;
}

const HISTORY_KEY = 'campair-review-history';

function getHistory(): Record<string, HistoryEntry[]> {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  } catch { return {}; }
}

function saveHistory(history: Record<string, HistoryEntry[]>) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

/** Ensure the current scan's finding is recorded in history. */
function ensureCurrentEntry(materialId: string, material: Material, scanDate: string) {
  const history = getHistory();
  const entries = history[materialId] || [];
  const alreadyLogged = entries.some((e) => e.scanDate === scanDate);
  if (!alreadyLogged && material.status !== 'current') {
    entries.push({
      scanDate,
      status: material.status,
      finding: material.finding,
      suggestedAction: material.suggestedAction,
      resolution: null,
      resolvedAt: null,
    });
    history[materialId] = entries;
    saveHistory(history);
  }
  // Also log "current" scans so the timeline shows clean weeks
  if (!alreadyLogged && material.status === 'current') {
    entries.push({
      scanDate,
      status: 'current',
      finding: material.finding,
      suggestedAction: null,
      resolution: null,
      resolvedAt: null,
    });
    history[materialId] = entries;
    saveHistory(history);
  }
}

function resolveEntry(materialId: string, scanDate: string, action: ResolutionAction) {
  const history = getHistory();
  const entries = history[materialId] || [];
  const entry = entries.find((e) => e.scanDate === scanDate && !e.resolution);
  if (entry) {
    entry.resolution = action;
    entry.resolvedAt = new Date().toISOString();
  }
  history[materialId] = entries;
  saveHistory(history);
}

function isResolved(materialId: string, scanDate: string): ResolutionAction | null {
  const history = getHistory();
  const entries = history[materialId] || [];
  const entry = entries.find((e) => e.scanDate === scanDate);
  return entry?.resolution || null;
}

function getMaterialHistory(materialId: string): HistoryEntry[] {
  const history = getHistory();
  return (history[materialId] || []).slice().sort(
    (a, b) => new Date(b.scanDate).getTime() - new Date(a.scanDate).getTime()
  );
}

/* ── Data types ───────────────────────────────────────────────────── */

interface Material {
  id: string;
  type: MaterialType;
  title: string;
  url?: string;
  status: FindingStatus;
  severity: Severity;
  finding: string;
  suggestedAction: string | null;
  sources: string[];
  detectedDate: string;
}

interface SessionReview {
  sessionId: string;
  sessionTitle: string;
  track: string;
  materials: Material[];
}

interface ReviewData {
  lastReviewDate: string;
  nextReviewDate: string;
  overallStatus: string;
  summary: string;
  sessions: SessionReview[];
}

const data = reviewData as ReviewData;

const statusConfig: Record<FindingStatus, { icon: string; label: string }> = {
  current: { icon: '✅', label: 'Current' },
  'review-suggested': { icon: '⚠️', label: 'Review Suggested' },
  outdated: { icon: '🔴', label: 'Outdated' },
};

const typeIcons: Record<MaterialType, string> = {
  deck: '📊',
  guide: '📋',
  lab: '🧪',
  video: '🎬',
  document: '📄',
};

function groupSessionsByDay(sessions: SessionReview[]): Record<string, SessionReview[]> {
  const groups: Record<string, SessionReview[]> = {};
  for (const session of sessions) {
    let groupLabel: string;
    if (session.sessionId.startsWith('w0')) {
      groupLabel = 'Week 0';
    } else if (session.sessionId.includes('day1')) {
      groupLabel = 'Week 1 — Day 1';
    } else if (session.sessionId.includes('day2')) {
      groupLabel = 'Week 1 — Day 2';
    } else if (session.sessionId.includes('day3')) {
      groupLabel = 'Week 1 — Day 3';
    } else if (session.sessionId.includes('day4')) {
      groupLabel = 'Week 1 — Day 4';
    } else {
      groupLabel = 'Other';
    }
    if (!groups[groupLabel]) groups[groupLabel] = [];
    groups[groupLabel].push(session);
  }
  return groups;
}

export function ContentReviewDashboard() {
  const [, setVersion] = useState(0);
  const [expandedMaterial, setExpandedMaterial] = useState<string | null>(null);
  const scanDate = data.lastReviewDate;

  // Seed history entries for current scan on first render
  for (const session of data.sessions) {
    for (const material of session.materials) {
      ensureCurrentEntry(material.id, material, scanDate);
    }
  }

  const handleResolve = useCallback((materialId: string, action: ResolutionAction) => {
    resolveEntry(materialId, scanDate, action);
    setVersion((v) => v + 1);
  }, [scanDate]);

  const toggleHistory = useCallback((materialId: string) => {
    setExpandedMaterial((prev) => (prev === materialId ? null : materialId));
  }, []);

  const lastReview = new Date(data.lastReviewDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Compute next Monday dynamically
  const now = new Date();
  const nextMonday = new Date(now);
  const dayOfWeek = now.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : dayOfWeek === 1 ? 7 : 8 - dayOfWeek;
  nextMonday.setDate(now.getDate() + daysUntilMonday);
  const nextReview = nextMonday.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const allMaterials = data.sessions.flatMap((s) => s.materials);
  const currentCount = allMaterials.filter((m) => m.status === 'current' || isResolved(m.id, scanDate) !== null).length;
  const warningCount = allMaterials.filter((m) => m.status === 'review-suggested' && isResolved(m.id, scanDate) === null).length;
  const outdatedCount = allMaterials.filter((m) => m.status === 'outdated' && isResolved(m.id, scanDate) === null).length;
  const effectiveOverallStatus = outdatedCount > 0 ? 'critical' : warningCount > 0 ? 'warning' : 'current';

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="review-dashboard">
      <div className="review-dashboard__header">
        <div className="review-dashboard__status-bar">
          <div className="review-dashboard__status-indicator" data-status={effectiveOverallStatus}>
            <span className="review-dashboard__status-dot" />
            <span className="review-dashboard__status-label">
              {effectiveOverallStatus === 'current' && 'All Clear'}
              {effectiveOverallStatus === 'warning' && 'Review Needed'}
              {effectiveOverallStatus === 'critical' && 'Action Required'}
            </span>
          </div>
          <div className="review-dashboard__dates">
            <span>Last scan: {lastReview}</span>
            <span>Next scan: {nextReview}</span>
          </div>
        </div>
        <p className="review-dashboard__summary">{data.summary}</p>
        <div className="review-dashboard__stats">
          <div className="review-stat review-stat--current">
            <span className="review-stat__count">{currentCount}</span>
            <span className="review-stat__label">Materials Current</span>
          </div>
          <div className="review-stat review-stat--warning">
            <span className="review-stat__count">{warningCount}</span>
            <span className="review-stat__label">Review Suggested</span>
          </div>
          <div className="review-stat review-stat--critical">
            <span className="review-stat__count">{outdatedCount}</span>
            <span className="review-stat__label">Outdated</span>
          </div>
        </div>
      </div>

      <div className="review-dashboard__sessions">
        <h4 className="review-dashboard__findings-title">Material-by-Material Findings</h4>
        {Object.entries(groupSessionsByDay(data.sessions)).map(([groupLabel, sessions]) => (
          <div key={groupLabel} className="review-day-group">
            <div className="review-day-group__header">
              <span className="review-day-group__badge">{groupLabel}</span>
              <div className="review-day-group__line" />
            </div>
            <div className="review-day-group__sessions">
              {sessions.map((session) => (
                <details key={session.sessionId} className="review-session">
                  <summary className="review-session__summary">
                    <span className="review-session__title">{session.sessionTitle}</span>
                    <span className="review-session__track">{session.track}</span>
                    <span className="review-session__material-count">
                      {session.materials.length} material{session.materials.length !== 1 ? 's' : ''}
                    </span>
                    <span className="review-session__status-dots">
                      {session.materials.map((m) => {
                        const resolved = isResolved(m.id, scanDate) !== null;
                        const effectiveStatus: FindingStatus = resolved ? 'current' : m.status;
                        return (
                          <span key={m.id} className={`review-session__dot review-session__dot--${effectiveStatus}`} title={`${m.title}: ${statusConfig[effectiveStatus].label}`} />
                        );
                      })}
                    </span>
                  </summary>
                  <div className="review-session__materials">
                    {session.materials.map((material) => {
                      const resolution = isResolved(material.id, scanDate);
                      const effectiveStatus: FindingStatus = resolution ? 'current' : material.status;
                      const config = statusConfig[effectiveStatus];
                      const history = getMaterialHistory(material.id);
                      const isHistoryOpen = expandedMaterial === material.id;
                      const hasHistory = history.length > 0;

                      return (
                        <div key={material.id} className={`review-material review-material--${effectiveStatus}`}>
                          <div className="review-material__header">
                            <span className="review-material__type-icon">{typeIcons[material.type]}</span>
                            <span className="review-material__title">{material.title}</span>
                            {material.url && (
                              <a href={material.url} className="review-material__download" target="_blank" rel="noopener noreferrer">
                                ↗ Open
                              </a>
                            )}
                            {hasHistory && (
                              <button
                                className={`review-material__history-toggle ${isHistoryOpen ? 'review-material__history-toggle--open' : ''}`}
                                onClick={() => toggleHistory(material.id)}
                                title="View version history"
                              >
                                🕒 History ({history.length})
                              </button>
                            )}
                            <span className="review-material__status">
                              {config.icon} {config.label}
                            </span>
                          </div>

                          {/* Current finding or resolved notice */}
                          {resolution ? (
                            <p className="review-material__finding review-material__finding--dismissed">
                              ✓ Resolved — {resolution === 'implemented' ? 'Update implemented' : 'Finding rejected'}
                            </p>
                          ) : (
                            <>
                              <p className="review-material__finding">{material.finding}</p>
                              {material.suggestedAction && (
                                <div className="review-material__action">
                                  <strong>Suggested Action:</strong> {material.suggestedAction}
                                </div>
                              )}
                              {material.sources.length > 0 && (
                                <div className="review-material__sources">
                                  <strong>Sources:</strong>
                                  {material.sources.map((src, i) => (
                                    <a key={i} href={src} target="_blank" rel="noopener noreferrer">{src}</a>
                                  ))}
                                </div>
                              )}
                              {material.status !== 'current' && (
                                <div className="review-material__actions">
                                  <button
                                    className="review-material__btn review-material__btn--implemented"
                                    onClick={() => handleResolve(material.id, 'implemented')}
                                  >
                                    ✓ Implemented
                                  </button>
                                  <button
                                    className="review-material__btn review-material__btn--rejected"
                                    onClick={() => handleResolve(material.id, 'rejected')}
                                  >
                                    ✗ Rejected
                                  </button>
                                </div>
                              )}
                            </>
                          )}

                          {/* Version history timeline */}
                          {isHistoryOpen && (
                            <div className="review-material__timeline">
                              <div className="timeline__header">Version History</div>
                              <div className="timeline__entries">
                                {history.map((entry, i) => (
                                  <div key={i} className={`timeline__entry timeline__entry--${entry.status}`}>
                                    <div className="timeline__marker" />
                                    <div className="timeline__content">
                                      <div className="timeline__date">
                                        <span className="timeline__scan-date">{formatDate(entry.scanDate)}</span>
                                        <span className={`timeline__status-badge timeline__status-badge--${entry.status}`}>
                                          {statusConfig[entry.status]?.icon} {statusConfig[entry.status]?.label || entry.status}
                                        </span>
                                        {entry.resolution && (
                                          <span className={`timeline__resolution timeline__resolution--${entry.resolution}`}>
                                            {entry.resolution === 'implemented' ? '✓ Implemented' : '✗ Rejected'}
                                            {entry.resolvedAt && ` · ${formatDate(entry.resolvedAt)}`}
                                          </span>
                                        )}
                                      </div>
                                      <p className="timeline__finding">{entry.finding}</p>
                                      {entry.suggestedAction && (
                                        <p className="timeline__suggestion">
                                          <strong>Suggestion:</strong> {entry.suggestedAction}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
