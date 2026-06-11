import reviewData from '../data/content-review.json';

type Severity = 'info' | 'warning' | 'critical';
type FindingStatus = 'current' | 'review-suggested' | 'outdated';
type MaterialType = 'deck' | 'guide' | 'lab' | 'video' | 'document';

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
  const lastReview = new Date(data.lastReviewDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const nextReview = new Date(data.nextReviewDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const allMaterials = data.sessions.flatMap((s) => s.materials);
  const currentCount = allMaterials.filter((m) => m.status === 'current').length;
  const warningCount = allMaterials.filter((m) => m.status === 'review-suggested').length;
  const outdatedCount = allMaterials.filter((m) => m.status === 'outdated').length;

  return (
    <div className="review-dashboard">
      <div className="review-dashboard__header">
        <div className="review-dashboard__status-bar">
          <div className="review-dashboard__status-indicator" data-status={data.overallStatus}>
            <span className="review-dashboard__status-dot" />
            <span className="review-dashboard__status-label">
              {data.overallStatus === 'current' && 'All Clear'}
              {data.overallStatus === 'warning' && 'Review Needed'}
              {data.overallStatus === 'critical' && 'Action Required'}
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
                      {session.materials.map((m) => (
                        <span key={m.id} className={`review-session__dot review-session__dot--${m.status}`} title={`${m.title}: ${statusConfig[m.status].label}`} />
                      ))}
                    </span>
                  </summary>
                  <div className="review-session__materials">
                    {session.materials.map((material) => {
                      const config = statusConfig[material.status];
                      return (
                        <div key={material.id} className={`review-material review-material--${material.status}`}>
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
