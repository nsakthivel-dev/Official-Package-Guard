import React from 'react';
import { Bug, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { GITHUB_ISSUES_URL, LATEST_STABLE_RELEASE } from '../data/releases';

export const SupportPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Community Support & Issue Tracker — Package Guard"
        description="Get help with Package Guard. Official GitHub issue tracker links, bug reporting guidelines, installation assistance, and common troubleshooting."
      />

      <div className="container" style={{ maxWidth: '880px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">Support Portal</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Support & Help Center</h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Need help installing or configuring Package Guard on Windows? Find verified documentation and direct links to our official GitHub issue tracker.
          </p>
        </div>

        {/* Support Options Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {/* Card 1: Bug Reports */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Bug size={22} color="#f43f5e" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Report a Bug</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Encountered an unexpected error, crash, or Windows installation issue? File a bug report directly on GitHub.
            </p>
            <a
              href={`${GITHUB_ISSUES_URL}/new`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>Submit Issue on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Card 2: Documentation */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <FileText size={22} color="#38bdf8" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Setup & Installation Docs</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Review comprehensive step-by-step installation guides, SmartScreen walkthroughs, and silent setup flags.
            </p>
            <Link to="/docs" className="btn btn-secondary btn-sm">
              <span>Browse Documentation</span>
            </Link>
          </div>

          {/* Card 3: Checksum & Security */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <ShieldCheck size={22} color="#10b981" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Binary Verification</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Learn how to verify the SHA-256 integrity hash of <code>{LATEST_STABLE_RELEASE.installerFilename}</code> in PowerShell.
            </p>
            <Link to="/docs#checksum" className="btn btn-secondary btn-sm">
              <span>View SHA-256 Guide</span>
            </Link>
          </div>
        </div>

        {/* Bug Reporting Guidelines */}
        <section className="card" style={{ marginBottom: '3rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Guidelines for Filing High-Quality Issues</h2>
          <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
            To help us triage and resolve issues efficiently, please include the following details in your GitHub report:
          </p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            <li><strong>Package Guard Version:</strong> (e.g., v{LATEST_STABLE_RELEASE.version})</li>
            <li><strong>Windows Edition & Build:</strong> (e.g., Windows 11 Home 23H2 / Windows 10 x64)</li>
            <li><strong>Exact Steps to Reproduce:</strong> What actions led to the issue?</li>
            <li><strong>Expected vs. Actual Behavior:</strong> What should have occurred?</li>
            <li><strong>Terminal Logs / Error Messages:</strong> Any terminal exit code or error output.</li>
          </ul>
        </section>

        {/* Verified Contact Note */}
        <div className="callout callout-info" style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            <strong>Official Support Channel:</strong> Community support is conducted openly and transparently via GitHub Issues. We do not operate phone lines or private email ticketing to ensure all solutions benefit the community.
          </p>
        </div>
      </div>
    </>
  );
};
