import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { NonEngineers } from './pages/NonEngineers';
import { Engineers } from './pages/Engineers';
import { ContentRepository } from './pages/ContentRepository';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/non-engineers" element={<NonEngineers />} />
        <Route path="/engineers" element={<Engineers />} />
        <Route path="/repository" element={<ContentRepository />} />
      </Routes>
    </Layout>
  );
}

export default App
