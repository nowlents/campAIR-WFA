import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const RYO_PHASES = [
  { id: 'plan', label: '01 · Plan' },
  { id: 'deliver', label: '02 · Deliver' },
  { id: 'showcase', label: '03 · Showcase' },
  { id: 'measure', label: '04 · Measure & Iterate' },
  { id: 'communicate', label: '05 · Communicate & Scale' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const onRunYourOwn = location.pathname === '/run-your-own';
  const [activePhase, setActivePhase] = useState<string>('plan');

  useEffect(() => {
    if (!onRunYourOwn) return;

    let observer: IntersectionObserver | null = null;
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible[0]) setActivePhase(visible[0].target.id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
      );
      RYO_PHASES.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && observer) observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [onRunYourOwn]);

  return (
    <div className="layout">
      <header className="header">
        <div className="header__content">
          <div className="header__brand">
            <span className="header__logo">✈️</span>
            <h1 className="header__title">Camp AIR</h1>
            <span className="header__subtitle">Workforce Acceleration</span>
          </div>
        </div>
      </header>
      <div className="layout__body">
        <nav className="sidebar">
          <NavLink to="/" end className="sidebar__link">
            🏠 Overview
          </NavLink>
          <NavLink to="/run-your-own" className="sidebar__link">
            🚀 Run Your Own
          </NavLink>
          {onRunYourOwn && (
            <div className="sidebar__subnav">
              {RYO_PHASES.map((phase) => (
                <a
                  key={phase.id}
                  href={`#${phase.id}`}
                  className={`sidebar__sublink${activePhase === phase.id ? ' is-active' : ''}`}
                >
                  {phase.label}
                </a>
              ))}
            </div>
          )}
          <NavLink to="/engineers" className="sidebar__link">
            ⚙️ Engineering Track
          </NavLink>
          <NavLink to="/non-engineers" className="sidebar__link">
            💡 Non-Engineering Track
          </NavLink>
          <NavLink to="/support-resources" className="sidebar__link">
            📚 Resources &amp; FAQ
          </NavLink>
        </nav>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
