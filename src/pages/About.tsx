import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { GITHUB_REPO_URL } from '../data/releases';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="About & Philosophy — Package Guard"
        description="Learn about the purpose, architecture philosophy, and community behind Package Guard: local software dependency state management for Windows developers."
      />

      <div className="container" style={{ maxWidth: '880px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">About Package Guard</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Product Purpose & Philosophy</h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Empowering developers on Windows to maintain full control and deterministic visibility over their local software dependencies.
          </p>
        </div>

        {/* Origin & Philosophy */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>The Local-First Security Problem</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
            Over the past decade, software security tooling has heavily migrated to multi-tenant cloud platforms. While cloud Software Composition Analysis (SCA) scanners provide centralized reporting, they introduce two critical friction points for engineers:
          </p>
          <ol style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            <li>
              <strong>Workstation Blind Spots:</strong> Vulnerable or hijacked dependencies frequently run arbitrary installation hooks on developer laptops during <code>npm install</code>, well before pull requests reach remote CI pipelines.
            </li>
            <li>
              <strong>Data Exfiltration Risks:</strong> Many enterprise development teams and regulated organizations are prohibited from uploading proprietary internal package manifests, repository paths, and tokens to third-party cloud vendors.
            </li>
          </ol>
          <p style={{ lineHeight: 1.7 }}>
            <strong>Package Guard</strong> was created to solve this specific challenge by running entirely on the developer's Windows workstation. It gives developers instant, offline, deterministic auditing of their package states without sending a single byte outside the local environment.
          </p>
        </section>

        {/* Guiding Principles */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Our Core Principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#38bdf8' }}>1. True Local Privacy</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Zero telemetry, zero user tracking, and no cloud exfiltration. What happens on your workstation stays on your workstation.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#34d399' }}>2. Transparent Integrity</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Every build is publicly hashed with SHA-256 and hosted as verifiable assets on GitHub Releases. No deceptive installers or bundled adware.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#818cf8' }}>3. Enterprise Automatable</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Packaged using standard NSIS technology to support headless <code>/S</code> silent installation across Windows fleets.
              </p>
            </div>
          </div>
        </section>

        {/* Open Source & Community */}
        <section style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Open Source Community</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Package Guard is actively developed and maintained by <strong>nsakthivel-dev</strong> and open-source contributors. We welcome feedback, issue submissions, and documentation improvements.
          </p>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>GitHub Repository</span>
            <ExternalLink size={16} />
          </a>
        </section>
      </div>
    </>
  );
};
