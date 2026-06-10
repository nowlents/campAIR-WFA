import { NavLink } from 'react-router-dom';
import { workstreams } from '../data/deliverables';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header__content">
          <div className="header__brand">
            <span className="header__logo">✈️</span>
            <h1 className="header__title">Camp AIR</h1>
            <span className="header__subtitle">Deliverables Portal</span>
          </div>
        </div>
      </header>
      <div className="layout__body">
        <nav className="sidebar">
          <NavLink to="/" end className="sidebar__link">
            🏠 Overview
          </NavLink>
          {workstreams.map((ws) => (
            <NavLink key={ws.id} to={`/${ws.id}`} className="sidebar__link">
              {ws.icon} {ws.shortTitle}
            </NavLink>
          ))}
        </nav>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
