import React from 'react';
import { AlertCircle, FileCheck, Lock, ExternalLink, Key } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { CodeSnippet } from '../components/CodeSnippet';
import { LATEST_STABLE_RELEASE, GITHUB_REPO_URL } from '../data/releases';

export const SecurityPage: React.FC = () => {
  const release = LATEST_STABLE_RELEASE;

  return (
    <>
      <SeoHead
        title="Security & Vulnerability Reporting — Package Guard"
        description="Official security guidelines, binary verification procedures, code signing transparency, and coordinated vulnerability disclosure for Package Guard."
      />

      <div className="container" style={{ maxWidth: '920px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">Security Policy</span>
            <span className="badge badge-cyan">Coordinated Disclosure</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Security & Disclosure Policy</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            We take the integrity of developer workstations seriously. Learn how we distribute binaries, verify cryptographic hashes, and handle responsible vulnerability disclosures.
          </p>
        </div>

        {/* Section 1: Binary Verification */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <FileCheck size={22} color="#10b981" />
            <h2 style={{ fontSize: '1.4rem' }}>1. Binary Integrity & Checksums</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            To prevent man-in-the-middle tampering and ensure that executable installers have not been modified, every published release is hashed using SHA-256.
          </p>

          <CodeSnippet
            title={`SHA-256 CHECKSUM FOR ${release.installerFilename}`}
            language="sha256"
            code={release.sha256}
          />

          <p style={{ fontSize: '0.92rem', margin: '1rem 0 0.5rem' }}>
            Verify on Windows PowerShell:
          </p>

          <CodeSnippet
            title="POWERSHELL VERIFICATION"
            language="powershell"
            code={`Get-FileHash -Algorithm SHA256 .\\${release.installerFilename}`}
          />
        </section>

        {/* Section 2: Code Signing Status */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Key size={22} color="#f59e0b" />
            <h2 style={{ fontSize: '1.4rem' }}>2. Digital Signature Status</h2>
          </div>
          
          <div className="callout callout-warning">
            <div className="callout-title">
              <span>Transparent Disclosure: Unsigned Open-Source Release</span>
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, marginTop: '0.4rem' }}>
              Package Guard {release.version} is packaged as a standard Nullsoft Scriptable Install System (NSIS) installer without an Extended Validation (EV) hardware-backed code signing certificate.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, marginTop: '0.5rem' }}>
              Because EV certificates require commercial entity registration and recurring hardware token fees, community-driven projects rely on cryptographic SHA-256 digests and public GitHub release artifacts to guarantee binary provenance.
            </p>
          </div>
        </section>

        {/* Section 3: Architecture Security */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Lock size={22} color="#38bdf8" />
            <h2 style={{ fontSize: '1.4rem' }}>3. Application Sandbox & Architecture</h2>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            <li>
              <strong>Electron Context Isolation:</strong> Package Guard enforces context isolation between renderer processes and main Node.js processes to mitigate Cross-Site Scripting (XSS) elevation risks.
            </li>
            <li>
              <strong>Read-Only Manifest Inspection:</strong> Dependency state auditing is performed through static read operations on local package manifests rather than evaluating untrusted post-install scripts.
            </li>
            <li>
              <strong>No Remote Script Injection:</strong> The application does not download or evaluate dynamic remote scripts or unverified third-party binaries at runtime.
            </li>
          </ul>
        </section>

        {/* Section 4: Vulnerability Reporting */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <AlertCircle size={22} color="#f43f5e" />
            <h2 style={{ fontSize: '1.4rem' }}>4. Coordinated Vulnerability Disclosure</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            If you discover a security vulnerability in Package Guard or its website, please report it responsibly:
          </p>

          <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Reporting Channel</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Please submit security reports via the official GitHub Security Advisory mechanism or by opening a confidential security inquiry on our GitHub repository:
            </p>
            <a
              href={`${GITHUB_REPO_URL}/security/advisories`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>GitHub Security Advisories</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Please include: a description of the vulnerability, reproduction steps or Proof of Concept (PoC), and the affected version of Package Guard.
          </p>
        </section>
      </div>
    </>
  );
};
