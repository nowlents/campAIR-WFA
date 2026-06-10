export const theme = {
  colors: {
    primary: '#0078D4',
    primaryDark: '#005A9E',
    primaryLight: '#DEECF9',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    surfaceAlt: '#F3F2F1',
    text: '#323130',
    textSecondary: '#605E5C',
    textLight: '#A19F9D',
    border: '#EDEBE9',
    statusReady: '#107C10',
    statusReadyBg: '#DFF6DD',
    statusInProgress: '#CA5010',
    statusInProgressBg: '#FFF4CE',
    statusPlanned: '#8A8886',
    statusPlannedBg: '#F3F2F1',
  },
  fonts: {
    base: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
  },
  shadows: {
    card: '0 1.6px 3.6px rgba(0,0,0,0.06), 0 0.3px 0.9px rgba(0,0,0,0.04)',
    cardHover: '0 3.2px 7.2px rgba(0,0,0,0.1), 0 0.6px 1.8px rgba(0,0,0,0.06)',
    elevated: '0 6.4px 14.4px rgba(0,0,0,0.12), 0 1.2px 3.6px rgba(0,0,0,0.08)',
  },
  radii: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
};

export type Theme = typeof theme;
