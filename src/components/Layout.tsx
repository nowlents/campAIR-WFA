import { NavLink } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
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
          <NavLink to="/engineers" className="sidebar__link">
            ⚙️ Camp AIR for Engineers
          </NavLink>
          <NavLink to="/non-engineers" className="sidebar__link">
            💡 Camp AIR for Non-Engineers
          </NavLink>
          <NavLink to="/support-resources" className="sidebar__link">
            📚 Support &amp; Resources
          </NavLink>
        </nav>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
