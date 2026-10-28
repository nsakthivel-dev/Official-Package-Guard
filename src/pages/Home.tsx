import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ShieldCheck, Terminal, Cpu, Lock, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { LATEST_STABLE_RELEASE } from '../data/releases';

export const Home: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Package Guard — Local Dependency State Management & Security Auditing"
        description="Official site for Package Guard. Native Windows desktop application for managing local software dependency state, tracking drift, and auditing security vulnerabilities."
      />

      {/* Hero Section */}
      <section style={{ padding: '3.5rem 0 4.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '940px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <img
              src="/logo.png"
              alt="Package Guard Logo"
              style={{ width: '72px', height: '72px', borderRadius: '16px', objectFit: 'contain', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}
            />
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <span className="badge badge-emerald">
              ● Official Release v{LATEST_STABLE_RELEASE.version}
            </span>
            <span className="badge badge-cyan">
              Windows 10 / 11 (x64)
            </span>
            <span className="badge badge-indigo">
              Node.js + Python
            </span>
          </div>

          <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.15 }}>
            Local Software Dependency <br />
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              State Management for Windows
            </span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            Package Guard combines a native Electron desktop GUI with a 50+ command C# CLI (<code>pg</code>) to audit, snapshot, and safeguard local Node.js and Python dependencies on Windows with zero cloud telemetry.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a
              href={LATEST_STABLE_RELEASE.downloadUrl}
              className="btn btn-primary btn-lg"
              aria-label={`Download Package Guard installer version ${LATEST_STABLE_RELEASE.version}`}
            >
              <Download size={20} />
              <span>Download for Windows (.exe)</span>
            </a>

            <Link to="/download" className="btn btn-secondary btn-lg">
              <span>Download Options (.EXE, .MSI, .MSIX)</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={15} color="#10b981" />
              Verified Release: {LATEST_STABLE_RELEASE.installerFilename} ({LATEST_STABLE_RELEASE.fileSizeFormatted})
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Lock size={15} color="#38bdf8" />
              100% Local & Zero Telemetry
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Terminal size={15} color="#818cf8" />
              NSIS Silent Install: /S
            </span>
          </div>
        </div>
      </section>

      {/* Product HUD Preview / Interactive State Card */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div className="card" style={{
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(9, 13, 22, 0.98) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56, 189, 248, 0.1)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }}></div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Package Guard — Local Dependency State Engine
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="badge badge-emerald">Scan Complete</span>
                <span className="badge badge-cyan">0 Leaks Detected</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Target Environment
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  Windows 10/11 x64 (Local)
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Direct OS integration, isolated Electron sandbox
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Telemetry & Tracking
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                  DISABLED / NONE
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Zero network requests sent with your package manifest
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Installer Distribution
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                  GitHub Releases Asset
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Immutable binary with published SHA-256 digest
                </div>
              </div>
            </div>

            {/* Quick Checksum Preview */}
            <div style={{ background: 'rgba(2, 6, 23, 0.75)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  VERIFIED SHA-256 CHECKSUM ({LATEST_STABLE_RELEASE.installerFilename})
                </span>
                <Link to="/download" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                  Verify in PowerShell →
                </Link>
              </div>
              <code style={{ fontSize: '0.85rem', color: '#a5f3fc', wordBreak: 'break-all' }}>
                {LATEST_STABLE_RELEASE.sha256}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Highlights */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Built for Local Developer Security</h2>
            <p>
              Designed specifically for engineering teams that cannot risk exfiltrating repository manifests or internal dependency topology to third-party SaaS vendors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="card card-interactive">
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} color="#38bdf8" />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Dependency Drift & Integrity</h3>
              <p>
                Continuously track your package tree states, detect unauthorized version drift, and audit manifest changes directly against your disk without running insecure scripts.
              </p>
            </div>

            <div className="card card-interactive">
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Lock size={24} color="#10b981" />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Air-Gapped & Zero Telemetry</h3>
              <p>
                Package Guard never collects telemetry, user analytics, machine IDs, or repository contents. Your software bills of materials (SBOMs) stay on your workstation.
              </p>
            </div>

            <div className="card card-interactive">
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Cpu size={24} color="#818cf8" />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Electron Desktop Engine</h3>
              <p>
                Native Windows 10 & 11 x64 application packaging with NSIS installer. Supports silent workstation provisioning via standard Windows terminal flags.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Transparency Section */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="callout callout-info" style={{ marginBottom: '2.5rem' }}>
            <div className="callout-title">
              <AlertCircle size={20} color="#06b6d4" />
              <span>Verified Distribution Policy</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Package Guard executable binaries are distributed <strong>exclusively via GitHub Releases</strong>. The installer is not bundled into the website repository or static web assets. You can verify SHA-256 digests and audit binary assets at any time.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Secure Your Local Packages?</h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 1.75rem' }}>
              Download version {LATEST_STABLE_RELEASE.version} for Windows or view documentation to get started in under two minutes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={LATEST_STABLE_RELEASE.downloadUrl} className="btn btn-primary">
                <Download size={18} />
                <span>Download v{LATEST_STABLE_RELEASE.version} (.exe)</span>
              </a>
              <Link to="/docs" className="btn btn-secondary">
                <span>View Documentation</span>
              </Link>
              <Link to="/features" className="btn btn-outline">
                <span>Explore Features</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
