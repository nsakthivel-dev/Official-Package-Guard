import React from 'react';
import { Download, ShieldCheck, AlertTriangle, Terminal, ExternalLink } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { CodeSnippet } from '../components/CodeSnippet';
import { LATEST_STABLE_RELEASE, GITHUB_RELEASES_URL } from '../data/releases';

export const DownloadPage: React.FC = () => {
  const release = LATEST_STABLE_RELEASE;

  return (
    <>
      <SeoHead
        title="Download Package Guard for Windows (.exe) — Official Release"
        description={`Download the verified Package Guard Windows desktop installer (v${release.version}, x64). Includes direct EXE asset link, SHA-256 hash, and installation instructions.`}
      />

      <div className="container" style={{ maxWidth: '980px', paddingTop: '1.5rem' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span className="badge badge-emerald">Latest Stable</span>
            <span className="badge badge-cyan">{release.architectureLabel}</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Download Package Guard</h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.15rem' }}>
            Official release {release.version} for Windows 10 and Windows 11. Download the standalone executable installer below.
          </p>
        </div>

        {/* Primary Download Card */}
        <div className="card" style={{
          padding: '2.5rem',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          background: 'linear-gradient(180deg, rgba(16, 23, 38, 0.9) 0%, rgba(13, 18, 29, 0.95) 100%)',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Package Guard {release.version}</h2>
                <span className="badge badge-emerald">Stable</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Published on <strong>{release.displayDate}</strong> • Architecture: <strong>{release.architectureLabel}</strong>
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {release.fileSizeFormatted}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ({release.fileSizeBytes.toLocaleString()} bytes)
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <a
              href={release.downloadUrl}
              className="btn btn-primary btn-lg"
              style={{ padding: '1rem 2.5rem', fontSize: '1.15rem', width: '100%', maxWidth: '480px' }}
              aria-label={`Direct Download ${release.installerFilename}`}
            >
              <Download size={22} />
              <span>Download {release.installerFilename}</span>
            </a>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              Direct binary asset hosted on GitHub Releases • No third-party bundlers or adware
            </div>
          </div>

          {/* Metadata Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Installer Filename</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {release.installerFilename}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Target Operating System</div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                Windows 10 / 11 (64-bit)
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Package Engine</div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                Nullsoft Scriptable Install System (NSIS)
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Silent Deployment Switch</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: '#38bdf8', marginTop: '0.2rem' }}>
                {release.silentInstallSwitch}
              </div>
            </div>
          </div>
        </div>

        {/* SHA-256 Checksum Verification */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <ShieldCheck size={22} color="#10b981" />
            <h2 style={{ fontSize: '1.4rem' }}>Verify Binary Integrity (SHA-256)</h2>
          </div>
          <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
            Always verify that the installer matches the official cryptographic hash before execution:
          </p>

          <CodeSnippet
            title="OFFICIAL SHA-256 CHECKSUM"
            language="sha256"
            code={release.sha256}
          />

          <p style={{ fontSize: '0.92rem', margin: '1rem 0 0.5rem' }}>
            Run the following command in PowerShell inside your download folder:
          </p>

          <CodeSnippet
            title="POWERSHELL VERIFICATION COMMAND"
            language="powershell"
            code={`Get-FileHash -Algorithm SHA256 .\\${release.installerFilename}`}
          />
        </section>

        {/* Windows SmartScreen Notice */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="callout callout-warning">
            <div className="callout-title">
              <AlertTriangle size={20} color="#f59e0b" />
              <span>Windows SmartScreen & Code Signing Disclosure</span>
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, marginTop: '0.5rem' }}>
              <strong>Signature Status:</strong> {release.digitalSignatureDetails}
            </p>
            <div style={{ marginTop: '0.85rem', fontSize: '0.9rem' }}>
              <strong>How to install on Windows 10/11:</strong>
              <ol style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', lineHeight: 1.7 }}>
                <li>Launch <code>{release.installerFilename}</code> after verifying the SHA-256 hash above.</li>
                <li>When the blue "Windows protected your PC" dialog appears, click <strong>More info</strong>.</li>
                <li>Click <strong>Run anyway</strong> to start the NSIS setup wizard.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Minimum System Requirements</h2>
          <table className="meta-table">
            <tbody>
              <tr>
                <th>Operating System</th>
                <td>{release.minimumRequirements.os}</td>
              </tr>
              <tr>
                <th>Processor Architecture</th>
                <td>{release.minimumRequirements.architecture}</td>
              </tr>
              <tr>
                <th>System Memory (RAM)</th>
                <td>{release.minimumRequirements.ram}</td>
              </tr>
              <tr>
                <th>Available Storage</th>
                <td>{release.minimumRequirements.storage}</td>
              </tr>
              <tr>
                <th>User Privileges</th>
                <td>{release.minimumRequirements.permissions}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Silent / Enterprise Installation */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Terminal size={22} color="#818cf8" />
            <h2 style={{ fontSize: '1.4rem' }}>Silent Command-Line Installation</h2>
          </div>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
            For automated workstation setups, CI test environments, or batch scripts, run the installer silently using the <code>/S</code> flag:
          </p>

          <CodeSnippet
            title="POWERSHELL / CMD SILENT INSTALL"
            language="cmd"
            code={`Start-Process -FilePath ".\\${release.installerFilename}" -ArgumentList "/S" -Wait`}
          />
        </section>

        {/* Release History & GitHub Link */}
        <section style={{ padding: '2rem 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '0.75rem' }}>Looking for Previous Releases or Source?</h3>
          <p style={{ maxWidth: '580px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
            All immutable release assets and version tags are archived on our official GitHub Releases repository.
          </p>
          <a
            href={GITHUB_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>View All GitHub Releases</span>
            <ExternalLink size={16} />
          </a>
        </section>
      </div>
    </>
  );
};
