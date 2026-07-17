import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { NonEngineers } from './pages/NonEngineers';
import { Engineers } from './pages/Engineers';
import { RunYourOwn } from './pages/RunYourOwn';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/run-your-own" element={<RunYourOwn />} />
        <Route path="/non-engineers" element={<NonEngineers />} />
        <Route path="/engineers" element={<Engineers />} />
      </Routes>
    </Layout>
  );
}

export default App
