import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DownloadPage } from './pages/Download';
import { ReleasesPage } from './pages/Releases';
import { FeaturesPage } from './pages/Features';
import { DocsPage } from './pages/Docs';
import { PrivacyPage } from './pages/Privacy';
import { SecurityPage } from './pages/Security';
import { ChangelogPage } from './pages/Changelog';
import { AboutPage } from './pages/About';
import { SupportPage } from './pages/Support';
import { AlertCircle } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const NotFound: React.FC = () => (
  <div className="container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: 'rgba(244, 63, 94, 0.15)', marginBottom: '1.5rem' }}>
      <AlertCircle size={32} color="#f43f5e" />
    </div>
    <h1 style={{ marginBottom: '1rem' }}>404 — Page Not Found</h1>
    <p style={{ maxWidth: '480px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
      The page you requested could not be located. Check the navigation menu or return to the Package Guard homepage.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
      <Link to="/download" className="btn btn-secondary">
        Download EXE
      </Link>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="site-main" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/download/" element={<DownloadPage />} />
          <Route path="/releases" element={<ReleasesPage />} />
          <Route path="/releases/" element={<ReleasesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/" element={<FeaturesPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/" element={<DocsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/privacy/" element={<PrivacyPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/security/" element={<SecurityPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/changelog/" element={<ChangelogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
