import React from 'react';
import { BookOpen, Terminal, AlertTriangle, ShieldCheck, HelpCircle, Cpu, ExternalLink } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { CodeSnippet } from '../components/CodeSnippet';
import { LATEST_STABLE_RELEASE, GITHUB_ISSUES_URL } from '../data/releases';

export const DocsPage: React.FC = () => {
  const release = LATEST_STABLE_RELEASE;

  return (
    <>
      <SeoHead
        title="Documentation & Getting Started — Package Guard"
        description="Comprehensive technical guide for Package Guard: installation methods, silent deployment, SHA-256 integrity verification, Windows SmartScreen bypass, and troubleshooting."
      />

      <div className="container" style={{ maxWidth: '940px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">Documentation</span>
            <span className="badge badge-cyan">v{release.version}</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Documentation & Setup Guide</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Step-by-step technical documentation for installing, configuring, and verifying the Package Guard Windows desktop application.
          </p>
        </div>

        {/* Table of contents bar */}
        <div className="card" style={{ padding: '1.25rem 1.5rem', marginBottom: '3rem', background: 'var(--bg-secondary)' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Table of Contents
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.92rem' }}>
            <a href="#installation">1. Installation</a>
            <a href="#checksum">2. SHA-256 Verification</a>
            <a href="#smartscreen">3. Windows SmartScreen</a>
            <a href="#silent-install">4. Silent Enterprise Deployment</a>
            <a href="#requirements">5. System Requirements</a>
            <a href="#troubleshooting">6. Troubleshooting</a>
          </div>
        </div>

        {/* Section 1: Installation */}
        <section id="installation" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <BookOpen size={22} color="#38bdf8" />
            <h2 style={{ fontSize: '1.5rem' }}>1. Installing Package Guard</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            Package Guard is delivered as a standalone Windows setup executable (<code>{release.installerFilename}</code>) powered by NSIS.
          </p>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Standard Graphical Setup</h3>
            <ol style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              <li>
                Download <code>{release.installerFilename}</code> from the <a href="/download">Download page</a> or <a href={release.githubReleaseUrl} target="_blank" rel="noopener noreferrer">GitHub Releases</a>.
              </li>
              <li>
                (Recommended) Verify the SHA-256 hash using the command below to ensure file integrity.
              </li>
              <li>
                Double-click <code>{release.installerFilename}</code> to start the setup wizard.
              </li>
              <li>
                If prompted by Windows SmartScreen, click <strong>More info</strong> and select <strong>Run anyway</strong> (see the SmartScreen section below).
              </li>
              <li>
                Follow the on-screen instructions to select your installation directory and create desktop/Start Menu shortcuts.
              </li>
              <li>
                Once installation completes, launch Package Guard from your Start Menu or Desktop.
              </li>
            </ol>
          </div>
        </section>

        {/* Section 2: SHA-256 Verification */}
        <section id="checksum" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <ShieldCheck size={22} color="#10b981" />
            <h2 style={{ fontSize: '1.5rem' }}>2. Cryptographic Integrity Verification</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            Before launching any executable downloaded from the internet, verify that its cryptographic digest matches the official release manifest.
          </p>

          <CodeSnippet
            title="OFFICIAL SHA-256 HASH"
            language="sha256"
            code={release.sha256}
          />

          <p style={{ margin: '1rem 0 0.5rem', fontSize: '0.92rem' }}>
            Open Windows PowerShell in your Downloads folder and run:
          </p>

          <CodeSnippet
            title="POWERSHELL INTEGRITY CHECK"
            language="powershell"
            code={`(Get-FileHash -Algorithm SHA256 .\\${release.installerFilename}).Hash -eq "${release.sha256}"`}
          />

          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            If the command prints <code>True</code>, the executable is intact and untampered.
          </p>
        </section>

        {/* Section 3: Windows SmartScreen */}
        <section id="smartscreen" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <AlertTriangle size={22} color="#f59e0b" />
            <h2 style={{ fontSize: '1.5rem' }}>3. Windows SmartScreen & Code Signing</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            Package Guard is an open-source community tool. The current build does not carry a commercial Extended Validation (EV) hardware-token certificate.
          </p>

          <div className="callout callout-warning">
            <div className="callout-title">
              <span>Why Does Windows Show "Unknown Publisher"?</span>
            </div>
            <p style={{ margin: '0.5rem 0', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Microsoft Defender SmartScreen relies on either paid EV code signing certificates or accumulated download volume telemetry. Because each new version starts with zero telemetry reputation, SmartScreen displays a warning banner.
            </p>
            <div style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
              <strong>To proceed safely:</strong>
              <ol style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', lineHeight: 1.7 }}>
                <li>Confirm the SHA-256 hash matches the published digest in Section 2.</li>
                <li>In the SmartScreen popup, click the underlined link: <strong>More info</strong>.</li>
                <li>Click <strong>Run anyway</strong>.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 4: Silent Enterprise Deployment */}
        <section id="silent-install" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Terminal size={22} color="#818cf8" />
            <h2 style={{ fontSize: '1.5rem' }}>4. Silent & Automated Setup</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            For IT provisioning or continuous testing environments, Package Guard supports headless silent installation via the standard NSIS <code>/S</code> argument (case-sensitive uppercase).
          </p>

          <CodeSnippet
            title="POWERSHELL / BATCH SILENT INSTALL"
            language="powershell"
            code={`Start-Process -FilePath ".\\${release.installerFilename}" -ArgumentList "/S" -Wait`}
          />

          <p style={{ fontSize: '0.92rem', margin: '1rem 0 0.5rem' }}>
            To specify an alternate target installation directory:
          </p>

          <CodeSnippet
            title="CUSTOM TARGET DIRECTORY (NSIS)"
            language="powershell"
            code={`Start-Process -FilePath ".\\${release.installerFilename}" -ArgumentList "/S /D=C:\\Tools\\PackageGuard" -Wait`}
          />
        </section>

        {/* Section 5: System Requirements */}
        <section id="requirements" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Cpu size={22} color="#38bdf8" />
            <h2 style={{ fontSize: '1.5rem' }}>5. System Requirements</h2>
          </div>

          <table className="meta-table">
            <tbody>
              <tr>
                <th>Operating System</th>
                <td>{release.minimumRequirements.os}</td>
              </tr>
              <tr>
                <th>Processor</th>
                <td>{release.minimumRequirements.architecture}</td>
              </tr>
              <tr>
                <th>Memory (RAM)</th>
                <td>{release.minimumRequirements.ram}</td>
              </tr>
              <tr>
                <th>Storage</th>
                <td>{release.minimumRequirements.storage}</td>
              </tr>
              <tr>
                <th>User Rights</th>
                <td>{release.minimumRequirements.permissions}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section 6: Troubleshooting */}
        <section id="troubleshooting" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <HelpCircle size={22} color="#10b981" />
            <h2 style={{ fontSize: '1.5rem' }}>6. Troubleshooting & Common Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Antivirus Flags the Newly Downloaded Installer
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Generic heuristic scanners often flag newly compiled NSIS installers until community reputation builds. Verify that the SHA-256 hash matches the official value above. If it matches, the binary is authentic.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Does Package Guard require Node.js or Python to be pre-installed on the host?
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                No. The standalone installer bundles the necessary Electron and Node runtime inside the application binary. No external runtime installations are required.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Need help or found a bug?
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                Submit detailed logs or bug reports directly on our official issue tracker:
              </p>
              <div style={{ marginTop: '0.75rem' }}>
                <a
                  href={GITHUB_ISSUES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Open GitHub Issue Tracker</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
