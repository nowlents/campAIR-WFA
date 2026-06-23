import { ContentRepository } from './pages/ContentRepository';

function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header__content">
          <div className="header__brand">
            <span className="header__logo">✈️</span>
            <h1 className="header__title">Camp AIR</h1>
            <span className="header__subtitle">Admin Content Repository</span>
          </div>
        </div>
      </header>
      <div className="layout__body">
        <main className="main-content main-content--full">
          <ContentRepository />
        </main>
      </div>
    </div>
  );
}

export default App
