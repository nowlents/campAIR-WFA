import { useState, useCallback } from 'react';
import reviewData from '../data/content-review.json';

type Severity = 'info' | 'warning' | 'critical';
type FindingStatus = 'current' | 'review-suggested' | 'outdated';
type MaterialType = 'deck' | 'guide' | 'lab' | 'video' | 'document';
type DismissAction = 'implemented' | 'rejected';

interface DismissedItem {
  action: DismissAction;
  dismissedAt: string;
  scanDate: string;
}

function getDismissals(): Record<string, DismissedItem> {
  try {
    return JSON.parse(localStorage.getItem('campair-review-dismissals') || '{}');
  } catch { return {}; }
}

function setDismissal(materialId: string, action: DismissAction, scanDate: string) {
  const dismissals = getDismissals();
  dismissals[materialId] = { action, dismissedAt: new Date().toISOString(), scanDate };
  localStorage.setItem('campair-review-dismissals', JSON.stringify(dismissals));
}

function isDismissed(materialId: string, scanDate: string): boolean {
  const dismissals = getDismissals();
  const entry = dismissals[materialId];
  // Only counts if dismissed for the current scan's data
  return !!entry && entry.scanDate === scanDate;
}

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
  const [, setDismissedVersion] = useState(0);
  const scanDate = data.lastReviewDate;

  const handleDismiss = useCallback((materialId: string, action: DismissAction) => {
    setDismissal(materialId, action, scanDate);
    setDismissedVersion((v) => v + 1);
  }, [scanDate]);

  const lastReview = new Date(data.lastReviewDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Compute next Monday at 7AM UTC (midnight PT) dynamically
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
  const currentCount = allMaterials.filter((m) => m.status === 'current' || isDismissed(m.id, scanDate)).length;
  const warningCount = allMaterials.filter((m) => m.status === 'review-suggested' && !isDismissed(m.id, scanDate)).length;
  const outdatedCount = allMaterials.filter((m) => m.status === 'outdated' && !isDismissed(m.id, scanDate)).length;

  const effectiveOverallStatus = outdatedCount > 0 ? 'critical' : warningCount > 0 ? 'warning' : 'current';

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
                        const effectiveStatus = isDismissed(m.id, scanDate) ? 'current' : m.status;
                        return (
                          <span key={m.id} className={`review-session__dot review-session__dot--${effectiveStatus}`} title={`${m.title}: ${statusConfig[effectiveStatus].label}`} />
                        );
                      })}
                    </span>
                  </summary>
                  <div className="review-session__materials">
                    {session.materials.map((material) => {
                      const dismissed = isDismissed(material.id, scanDate);
                      const effectiveStatus: FindingStatus = dismissed ? 'current' : material.status;
                      const config = statusConfig[effectiveStatus];
                      return (
                        <div key={material.id} className={`review-material review-material--${effectiveStatus}`}>
                          <div className="review-material__header">
                            <span className="review-material__type-icon">{typeIcons[material.type]}</span>
                            <span className="review-material__title">{material.title}</span>
                            {material.url && (
                              <a
                                href={material.url}
                                className="review-material__download"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                ↗ Open
                              </a>
                            )}
                            <span className="review-material__status">
                              {config.icon} {config.label}
                            </span>
                          </div>
                          {dismissed ? (
                            <p className="review-material__finding review-material__finding--dismissed">
                              ✓ Resolved — {getDismissals()[material.id]?.action === 'implemented' ? 'Update implemented' : 'Finding rejected'}
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
                                    onClick={() => handleDismiss(material.id, 'implemented')}
                                  >
                                    ✓ Implemented
                                  </button>
                                  <button
                                    className="review-material__btn review-material__btn--rejected"
                                    onClick={() => handleDismiss(material.id, 'rejected')}
                                  >
                                    ✗ Rejected
                                  </button>
                                </div>
                              )}
                            </>
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
