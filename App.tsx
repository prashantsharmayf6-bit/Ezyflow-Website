import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CRM from './pages/CRM';
import ProjectManagement from './pages/ProjectManagement';
import POS from './pages/POS';
import Workflow from './pages/Workflow';
import Pricing from './pages/Pricing';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};

export default App;