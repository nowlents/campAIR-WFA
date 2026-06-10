import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WorkstreamDetail } from './pages/WorkstreamDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<WorkstreamDetail />} />
      </Routes>
    </Layout>
  );
}

export default App
