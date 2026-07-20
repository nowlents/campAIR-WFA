import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { NonEngineers } from './pages/NonEngineers';
import { Engineers } from './pages/Engineers';
import { RunYourOwn } from './pages/RunYourOwn';
import { SupportResources } from './pages/SupportResources';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/run-your-own" element={<RunYourOwn />} />
        <Route path="/non-engineers" element={<NonEngineers />} />
        <Route path="/engineers" element={<Engineers />} />
        <Route path="/support-resources" element={<SupportResources />} />
      </Routes>
    </Layout>
  );
}

export default App
