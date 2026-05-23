import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/home/Home';

// Lazy load non-critical routes
const About = lazy(() => import('./pages/about/About'));
const Projects = lazy(() => import('./pages/projects/Projects'));
const CaseStudy = lazy(() => import('./pages/case-study/CaseStudy'));
const Services = lazy(() => import('./pages/services/Services'));
const Process = lazy(() => import('./pages/process/Process'));
const Contact = lazy(() => import('./pages/contact/Contact'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              {/* Alias /work to /projects */}
              <Route path="/work" element={<Navigate to="/projects" replace />} />
              
              {/* Project Case Studies */}
              <Route path="/projects/:slug" element={<CaseStudy />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              
              <Route path="/services" element={<Services />} />
              <Route path="/process" element={<Process />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback to homepage */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
