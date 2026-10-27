import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { GITHUB_REPO_URL, GITHUB_RELEASES_URL, GITHUB_ISSUES_URL, LATEST_STABLE_RELEASE } from '../data/releases';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col" style={{ maxWidth: '360px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img
                src="/logo.png"
                alt="Package Guard"
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'contain' }}
              />
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                Package Guard
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Local-first Windows developer desktop utility for dependency state tracking, drift detection, and integrity auditing.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="badge badge-emerald">
                Stable v{LATEST_STABLE_RELEASE.version}
              </span>
              <span className="badge badge-cyan">
                Windows x64
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><Link to="/download">Download Windows EXE</Link></li>
              <li><Link to="/features">Verified Features</Link></li>
              <li><Link to="/releases">Release History</Link></li>
              <li><Link to="/changelog">Changelog</Link></li>
              <li>
                <a href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span>GitHub Releases</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Documentation</h4>
            <ul className="footer-links">
              <li><Link to="/docs">Installation & Setup</Link></li>
              <li><Link to="/docs#checksum">SHA-256 Verification</Link></li>
              <li><Link to="/docs#smartscreen">SmartScreen Notice</Link></li>
              <li><Link to="/about">About & Philosophy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Security & Support</h4>
            <ul className="footer-links">
              <li><Link to="/security">Security Advisory</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/support">Community Support</Link></li>
              <li>
                <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span>Issue Tracker</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span>Source Repo</span>
                  <Github size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Package Guard. Released under MIT / Open Source terms.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Zero telemetry collected</span>
            <span>Local analysis on client device</span>
            <span>Binary hosted on GitHub Releases</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
