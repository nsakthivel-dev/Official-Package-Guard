import React from 'react';
import { AlertCircle, FileText, ExternalLink } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { CodeSnippet } from '../components/CodeSnippet';
import { GITHUB_REPO_URL } from '../data/releases';

export const PublicationPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Technical Research & Publication — Package Guard"
        description="Technical research and publication status for Package Guard. Verified status: manuscript in progress / unpublished. Overview of local dependency state management methodologies."
      />

      <div className="container" style={{ maxWidth: '920px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span className="badge badge-amber">Status: In Progress</span>
            <span className="badge badge-cyan">Unpublished Manuscript</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Research & Publication</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem' }}>
            Academic and technical investigation into local dependency state verification and developer workstation supply chain defense.
          </p>
        </div>

        {/* Publication Status Notice (Honest & Transparent) */}
        <div className="callout callout-warning" style={{ marginBottom: '3rem' }}>
          <div className="callout-title">
            <AlertCircle size={20} color="#f59e0b" />
            <span>Actual Publication Status Disclosure</span>
          </div>
          <p style={{ margin: '0.5rem 0', fontSize: '0.95rem', lineHeight: 1.6 }}>
            The research paper associated with Package Guard is currently <strong>in progress and unpublished</strong>. It has not yet been submitted to or accepted by a peer-reviewed academic conference or journal.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', lineHeight: 1.7, fontSize: '0.92rem' }}>
            <li><strong>Peer-Review Status:</strong> Not yet submitted (Internal manuscript preparation)</li>
            <li><strong>Digital Object Identifier (DOI):</strong> Not assigned (Pending formal submission)</li>
            <li><strong>Publication Venue:</strong> To be announced upon peer-review milestone</li>
            <li><strong>Preprint Availability:</strong> Draft under active author review</li>
          </ul>
        </div>

        {/* Research Abstract & Motivation */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <FileText size={22} color="#38bdf8" />
            <h2 style={{ fontSize: '1.4rem' }}>Research Scope & Objectives</h2>
          </div>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
            Modern software supply chain defense has predominantly concentrated on centralized CI/CD pipelines and remote cloud-based Software Composition Analysis (SCA) scanners. However, malicious package injections, dependency confusion attacks, and typosquatting often execute arbitrary install-time hooks directly on local developer workstations long before code reaches remote integration servers.
          </p>
          <p style={{ lineHeight: 1.7 }}>
            Package Guard investigates the feasibility and efficacy of an air-gapped, client-side dependency state verification model that continuously reconciles local filesystem lockfiles against known deterministic package trees without requiring the transmission of proprietary source code to external servers.
          </p>
        </section>

        {/* Core Methodological Pillars */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>Methodological Pillars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: '#38bdf8' }}>
                1. Local State Determinism
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Synthesizing static dependency graphs locally to isolate discrepancies between resolved lockfiles and disk-level package manifests.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: '#34d399' }}>
                2. Zero-Telemetry Confidentiality
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Guaranteeing developer privacy by ensuring zero outward network traffic for proprietary project manifests and internal corporate registries.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: '#818cf8' }}>
                3. Low-Overhead Native Runtime
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Evaluating performance metrics of desktop-based auditing engines on consumer Windows hardware under standard developer workloads.
              </p>
            </div>
          </div>
        </section>

        {/* Citation Guidelines (Draft) */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Draft Citation Information</h2>
          <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
            When referencing Package Guard as software or an ongoing research project, please cite the open-source software release:
          </p>

          <CodeSnippet
            title="BIBTEX REFERENCE (DRAFT)"
            language="bibtex"
            code={`@software{packageguard2026,
  author = {Package Guard Contributors},
  title = {Package Guard: Local Software Dependency State Management for Windows},
  year = {2026},
  version = {1.0.0},
  url = {https://github.com/nsakthivel-dev/Package-Guard},
  note = {Windows Desktop Application. Research manuscript in progress.}
}`}
          />
        </section>

        {/* Ongoing Updates */}
        <section style={{ padding: '2rem 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '0.75rem' }}>Tracking Research Milestones</h3>
          <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
            Updates regarding preprint publication, technical reports, and peer-review announcements will be published directly on our repository.
          </p>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>Follow on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </section>
      </div>
    </>
  );
};
