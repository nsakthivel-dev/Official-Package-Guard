import React from 'react';
import { Shield, EyeOff, Cpu, Terminal, FileCheck, Zap } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { LATEST_STABLE_RELEASE } from '../data/releases';

export const FeaturesPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Features & Capabilities — Package Guard"
        description="Explore the verified technical features of Package Guard: local dependency state tracking, air-gapped zero telemetry, Windows x64 architecture, and silent NSIS setup."
      />

      <div className="container" style={{ maxWidth: '980px', paddingTop: '1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span className="badge badge-emerald">Verified Features</span>
            <span className="badge badge-cyan">Package Guard Desktop</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Verified Product Capabilities</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.15rem' }}>
            Package Guard provides local software dependency state management and security auditing designed specifically for developers on Windows.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {/* Feature 1 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Shield size={22} color="#38bdf8" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Local Dependency State Inspection</h3>
            <p>
              Inspect and track software package states directly from your local disk. Identify unexpected version drift, altered dependencies, and manifest discrepancies without running unsafe build scripts.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <EyeOff size={22} color="#10b981" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Air-Gapped & Zero Telemetry</h3>
            <p>
              Built from the ground up on a local-first philosophy. Your project paths, dependency trees, authentication tokens, and code remain on your machine. Zero tracking or telemetry is transmitted.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Cpu size={22} color="#818cf8" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Windows Native Desktop Runtime</h3>
            <p>
              Tailored for Windows 10 and Windows 11 (64-bit x64). Packaged with Electron to deliver an intuitive desktop UI, smooth window controls, and low resource overhead.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Terminal size={22} color="#f59e0b" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Headless Silent Setup (/S)</h3>
            <p>
              Packaged using Nullsoft Scriptable Install System (NSIS), supporting the standard <code>/S</code> silent switch for automated IT workstation deployment and developer environment provisioning.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <FileCheck size={22} color="#06b6d4" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Cryptographic Integrity Verification</h3>
            <p>
              Every release is published with verified SHA-256 checksums on GitHub Releases. Users can verify byte-for-byte binary authenticity in PowerShell before executing the setup wizard.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Zap size={22} color="#f43f5e" />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Minimal Footprint</h3>
            <p>
              Requires under 250 MB of disk space. Operates efficiently without continuous cloud sync agents or memory-heavy background daemons running in the background.
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
                <td>Network Telemetry</td>
                <td style={{ color: '#10b981', fontWeight: 600 }}>None / Disabled</td>
                <td>Continuous analytics & tracking</td>
              </tr>
              <tr>
                <td>Target Platform</td>
                <td>Windows 10 / 11 (x64)</td>
                <td>Web-only dashboard or container</td>
              </tr>
              <tr>
                <td>Silent Enterprise Setup</td>
                <td>Standard NSIS <code>/S</code> flag</td>
                <td>Custom agent installers</td>
              </tr>
              <tr>
                <td>Offline / Air-Gapped Operation</td>
                <td style={{ color: '#10b981', fontWeight: 600 }}>Fully Supported</td>
                <td>Unsupported (Requires Cloud API)</td>
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
