import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { LATEST_STABLE_RELEASE } from '../data/releases';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('pg-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('pg-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('pg-theme', 'dark');
      setIsDark(true);
    }
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="container nav-container">
        <Link to="/" className="brand-link" onClick={closeMobile} aria-label="Package Guard Homepage">
          <div className="brand-logo-wrap">
            <img
              src="/logo.png"
              alt="Package Guard"
              style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'contain' }}
            />
          </div>
          <span>Package Guard</span>
        </Link>

        {/* Desktop and Mobile Navigation Menu */}
        <nav
          className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Main Navigation"
          id="main-nav-menu"
        >
          <NavLink to="/" end className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Overview
          </NavLink>
          <NavLink to="/download" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Download
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Features
          </NavLink>
          <NavLink to="/docs" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Docs
          </NavLink>
          <NavLink to="/releases" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Releases
          </NavLink>
          <NavLink to="/security" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Security
          </NavLink>
        </nav>

        {/* Nav actions: theme toggle & download button */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn-icon"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/download"
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex' }}
            aria-label={`Download Windows EXE v${LATEST_STABLE_RELEASE.version}`}
          >
            <Download size={14} />
            <span>v{LATEST_STABLE_RELEASE.version}</span>
          </Link>

          <button
            type="button"
            className="btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};
