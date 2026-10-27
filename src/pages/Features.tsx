import React from 'react';
import { EyeOff, Cpu, Terminal, Layers, RotateCcw, Database } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { LATEST_STABLE_RELEASE } from '../data/releases';

export const FeaturesPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Features & Capabilities — Package Guard"
        description="Explore verified capabilities of Package Guard: Multi-ecosystem scanning for Node.js and Python, native pg CLI with 50+ commands, local SQLite snapshots with rollback safety, and zero cloud telemetry."
      />

      <div className="container" style={{ maxWidth: '980px', paddingTop: '1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span className="badge badge-emerald">Verified Features</span>
            <span className="badge badge-cyan">Package Guard Desktop & CLI</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Verified Product Capabilities</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem' }}>
            Package Guard provides local software dependency state management, snapshot rollbacks, and security auditing for Windows developers.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {/* Feature 1 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Layers size={22} color="#38bdf8" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Multi-Ecosystem Discovery</h3>
            <p>
              Automatic detection and state management for both <strong>Node.js</strong> (<code>npm</code>, <code>pnpm</code>, <code>yarn</code>, <code>bun</code>) and <strong>Python</strong> environments (<code>venv</code>, <code>.venv</code>, <code>Conda</code>, <code>pip</code>).
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Terminal size={22} color="#f59e0b" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Native CLI Tool (`pg`)</h3>
            <p>
              Includes a native Windows C# CLI wrapper (<code>pg.exe</code>) with over 50 enterprise commands for scanning, diffing, snapshotting, auditing, diagnostics, and repairs directly in your terminal.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <RotateCcw size={22} color="#10b981" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Snapshot Engine & Rollbacks</h3>
            <p>
              Create immutable snapshot checkpoints before dependency updates. Instantly revert your working tree to a known good state with <code>pg rollback</code> if a package breaks your project.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Database size={22} color="#818cf8" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Local Unified SQLite Storage</h3>
            <p>
              All state histories, project metrics, and event queues are stored in a local SQLite database at <code>%APPDATA%\PackageGuard\data\</code>. No cloud database or accounts required.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <EyeOff size={22} color="#06b6d4" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Air-Gapped & Zero Telemetry</h3>
            <p>
              Built from the ground up on a local-first philosophy. Your project paths, dependency trees, and proprietary code remain on your machine. Zero tracking or telemetry is transmitted.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Cpu size={22} color="#f43f5e" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Live IPC via Named Pipes</h3>
            <p>
              Seamless real-time synchronization between the Windows desktop GUI and the <code>pg</code> CLI through local Windows Named Pipes, with automatic offline queue reconciliation.
            </p>
          </div>
        </div>

        {/* Technical Architecture Comparison */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Comparison: Package Guard vs. Cloud SaaS Auditors
          </h2>
          <table className="meta-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Feature / Characteristic</th>
                <th style={{ width: '30%', color: '#38bdf8' }}>Package Guard</th>
                <th style={{ width: '30%', color: 'var(--text-muted)' }}>Typical Cloud SaaS Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Exfiltration Risk</td>
                <td style={{ color: '#10b981', fontWeight: 600 }}>Zero (100% Local Analysis)</td>
                <td>High (Manifest uploaded to cloud)</td>
              </tr>
              <tr>
                <td>Supported Ecosystems</td>
                <td style={{ color: '#10b981', fontWeight: 600 }}>Node.js (npm/pnpm/yarn/bun) + Python (venv/conda)</td>
                <td>Often limited to Node.js or single lockfile</td>
              </tr>
              <tr>
                <td>Command-Line Interface</td>
                <td>Native Windows CLI (<code>pg.exe</code> with 50+ commands)</td>
                <td>Thin cloud API wrapper or none</td>
              </tr>
              <tr>
                <td>Snapshot & Instant Rollback</td>
                <td style={{ color: '#10b981', fontWeight: 600 }}>Local SQLite Snapshot Store</td>
                <td>Requires Git branch rebasing</td>
              </tr>
              <tr>
                <td>Local Database</td>
                <td>Embedded SQLite (<code>packageguard.db</code>)</td>
                <td>Remote vendor database</td>
              </tr>
              <tr>
                <td>Network Telemetry</td>
                <td style={{ color: '#10b981', fontWeight: 600 }}>None / Disabled</td>
                <td>Continuous analytics & tracking</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA banner */}
        <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Download the Official Windows App</h2>
          <p style={{ maxWidth: '560px', margin: '0 auto 1.75rem' }}>
            Get started with Package Guard {LATEST_STABLE_RELEASE.version} today on your local Windows development environment.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/download" className="btn btn-primary">
              <span>Go to Download Page</span>
            </Link>
            <Link to="/docs" className="btn btn-secondary">
              <span>Read Documentation</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
