import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import analyticsService from './services/analytics';

// Wrapper to track page views
const PageTracker: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    analyticsService.trackPageView(location.pathname);
    window.scrollTo(0, 0); // Reset scroll on route change
  }, [location]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <PageTracker>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </PageTracker>
      </Layout>
    </Router>
  );
};

export default App;