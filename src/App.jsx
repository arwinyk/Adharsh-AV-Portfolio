import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import CaseStudy from './pages/case-study/CaseStudy';
import Services from './pages/services/Services';
import Process from './pages/process/Process';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
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
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
