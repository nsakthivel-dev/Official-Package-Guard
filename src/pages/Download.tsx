import React, { useState } from 'react';
import {
  Download,
  ShieldCheck,
  AlertTriangle,
  Terminal,
  ExternalLink,
  Package,
  Layers,
  Box,
  Copy,
  Check,
  CheckCircle2,
  HardDrive
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { CodeSnippet } from '../components/CodeSnippet';
import { LATEST_STABLE_RELEASE, GITHUB_RELEASES_URL, InstallerOption } from '../data/releases';

export const DownloadPage: React.FC = () => {
  const release = LATEST_STABLE_RELEASE;
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(id);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  const getFormatIcon = (id: string) => {
    switch (id) {
      case 'exe':
        return <Package size={26} color="#38bdf8" />;
      case 'msi':
        return <Layers size={26} color="#10b981" />;
      case 'msix':
        return <Box size={26} color="#818cf8" />;
      default:
        return <Download size={26} color="#38bdf8" />;
    }
  };

  return (
    <>
      <SeoHead
        title="Download Package Guard for Windows — Version 1.0.0 (.EXE, .MSI, .MSIX)"
        description="Download Package Guard version 1.0.0 for Windows 10 and 11. Choose from official Windows Installer (.EXE), Enterprise Windows Installer (.MSI), and Microsoft Store Package (.MSIX)."
      />

      <div className="container" style={{ maxWidth: '1080px', paddingTop: '1.5rem' }}>
        {/* Release Metadata Header */}
        <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1rem' }}>
            <span className="badge badge-emerald">Latest Stable</span>
            <span className="badge badge-cyan">{release.targetPlatform} (x64)</span>
            <span className="badge badge-indigo">Version {release.version}</span>
          </div>

          <h1 style={{ marginBottom: '0.85rem' }}>
            Package Guard for Windows
          </h1>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            padding: '0.35rem 1rem',
            marginBottom: '1.25rem',
            fontSize: '0.92rem',
            color: 'var(--text-secondary)'
          }}>
            <span>Product: <strong style={{ color: 'var(--text-primary)' }}>{release.productName}</strong></span>
            <span>•</span>
            <span>Current Release: <strong style={{ color: 'var(--text-primary)' }}>{release.version}</strong></span>
            <span>•</span>
            <span>Platform: <strong style={{ color: 'var(--text-primary)' }}>{release.targetPlatform} 10 / 11</strong></span>
            <span>•</span>
            <span>Formats: <strong style={{ color: 'var(--accent-cyan)' }}>EXE</strong>, <strong style={{ color: 'var(--accent-emerald)' }}>MSI</strong>, <strong style={{ color: '#818cf8' }}>MSIX</strong></span>
          </div>

          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.12rem', color: 'var(--text-secondary)' }}>
            <strong>Version {release.version}</strong> — {release.releaseNotesSummary}
          </p>
        </header>

        {/* Release Note Alert Banner */}
        <div className="callout callout-info" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
          <CheckCircle2 size={22} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
              Release Note: {release.releaseNotesSummary}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Published on <strong>{release.displayDate}</strong>. All installer binaries below are officially compiled, standalone x64 Windows packages with zero remote telemetry or adware.
            </div>
          </div>
        </div>

        {/* 3 Prominent Download Options Grid */}
        <section aria-label="Available Installer Formats" style={{ marginBottom: '3.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.75rem'
          }}>
            {release.installers.map((option: InstallerOption) => {
              const isExe = option.id === 'exe';
              const isMsi = option.id === 'msi';

              const accentBorder = isExe
                ? 'rgba(56, 189, 248, 0.45)'
                : isMsi
                ? 'rgba(16, 185, 129, 0.35)'
                : 'rgba(99, 102, 241, 0.35)';

              const cardBg = isExe
                ? 'linear-gradient(180deg, rgba(16, 23, 38, 0.95) 0%, rgba(13, 18, 29, 0.98) 100%)'
                : 'linear-gradient(180deg, rgba(16, 23, 38, 0.8) 0%, rgba(13, 18, 29, 0.9) 100%)';

              return (
                <div
                  key={option.id}
                  className="card"
                  style={{
                    border: `1px solid ${accentBorder}`,
                    background: cardBg,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem 1.75rem',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Top Badges */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-tertiary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--border-subtle)'
                        }}>
                          {getFormatIcon(option.id)}
                        </div>
                        <div>
                          <span className={`badge ${isExe ? 'badge-cyan' : isMsi ? 'badge-emerald' : 'badge-indigo'}`}>
                            {option.formatBadge}
                          </span>
                        </div>
                      </div>

                      {option.recommended && (
                        <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                          Recommended
                        </span>
                      )}
                    </div>

                    {/* Title & Short Description */}
                    <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                      {option.formatName}
                    </h2>

                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', minHeight: '44px', lineHeight: 1.5 }}>
                      {option.description}
                    </p>

                    {/* Metadata Table */}
                    <div style={{
                      background: 'rgba(2, 6, 23, 0.5)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem',
                      marginBottom: '1.5rem',
                      fontSize: '0.85rem',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Package Guard Version:</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{option.version}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Installer Format:</span>
                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{option.extension}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Actual File Size:</span>
                        <strong style={{ color: 'var(--text-primary)' }}>
                          {option.fileSizeFormatted} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({option.fileSizeBytes.toLocaleString()} bytes)</span>
                        </strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Architecture:</span>
                        <span style={{ color: 'var(--text-primary)' }}>{option.architecture}</span>
                      </div>
                    </div>

                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                      {option.detailedDescription}
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div>
                    {/* Primary Download Button */}
                    <a
                      href={option.downloadPath}
                      className={`btn ${isExe ? 'btn-primary' : 'btn-secondary'} btn-lg`}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.25rem',
                        fontSize: '1rem',
                        marginBottom: '0.75rem',
                        boxShadow: isExe ? '0 4px 18px rgba(37, 99, 235, 0.4)' : undefined
                      }}
                      aria-label={`Download ${option.filename} (Version ${option.version})`}
                    >
                      <Download size={18} />
                      <span>Download {option.extension.toUpperCase()} ({option.fileSizeFormatted})</span>
                    </a>

                    {/* Permanent URL Display & Direct Mirror Link */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      <span title={option.downloadPath} style={{ fontFamily: 'var(--font-mono)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '170px' }}>
                        {option.downloadPath}
                      </span>
                      <a
                        href={option.directDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-cyan)' }}
                        aria-label={`Direct GitHub release asset mirror for ${option.filename}`}
                      >
                        <span>GitHub Asset</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    {/* Quick Hash Verification Box */}
                    <div style={{
                      background: 'rgba(2, 6, 23, 0.6)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.65rem 0.75rem',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          SHA-256 Digest
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(option.sha256, option.id)}
                          className="copy-btn"
                          aria-label={`Copy SHA-256 checksum for ${option.filename}`}
                          style={{ padding: '0.15rem 0.45rem', fontSize: '0.7rem' }}
                        >
                          {copiedHash === option.id ? (
                            <>
                              <Check size={12} color="#10b981" />
                              <span style={{ color: '#10b981' }}>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--text-secondary)',
                        wordBreak: 'break-all'
                      }}>
                        {option.sha256}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SHA-256 Checksum Verification Details */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <ShieldCheck size={22} color="#10b981" />
            <h2 style={{ fontSize: '1.4rem' }}>Verify Binary Integrity (SHA-256)</h2>
          </div>
          <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Before launching any installer downloaded from the web, verify that its SHA-256 cryptographic digest matches the official Package Guard version 1.0.0 release hashes:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {release.installers.map((option) => (
              <div key={option.id}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {option.formatName} — <code>{option.filename}</code>
                </div>
                <CodeSnippet
                  title={`POWERSHELL VERIFICATION FOR ${option.filename}`}
                  language="powershell"
                  code={`Get-FileHash -Algorithm SHA256 .\\${option.filename}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Unattended / Silent Installation Reference */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Terminal size={22} color="#818cf8" />
            <h2 style={{ fontSize: '1.4rem' }}>Command-Line & Silent Deployment</h2>
          </div>
          <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Package Guard supports silent, non-interactive installation across all three package formats for continuous integration, IT staging, and fleet management:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                1. Standalone Installer (.EXE) — NSIS Silent Switch
              </div>
              <CodeSnippet
                title="POWERSHELL / CMD SILENT INSTALL"
                language="powershell"
                code={`Start-Process -FilePath ".\\PackageGuard-Setup.exe" -ArgumentList "/S" -Wait`}
              />
            </div>

            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                2. Enterprise Installer (.MSI) — Windows Installer Engine
              </div>
              <CodeSnippet
                title="QUIET MSI INSTALL (CMD / POWERSHELL)"
                language="cmd"
                code={`msiexec.exe /i PackageGuard-1.0.0-x64.msi /qn /norestart`}
              />
            </div>

            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                3. Modern App Package (.MSIX) — Windows PowerShell Package Manager
              </div>
              <CodeSnippet
                title="POWERSHELL APPX PACKAGE INSTALL"
                language="powershell"
                code={`Add-AppxPackage -Path ".\\PackageGuard-1.0.0-x64.msix"`}
              />
            </div>
          </div>
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
                <li>Download your preferred installer (.exe, .msi, or .msix) and verify the SHA-256 hash.</li>
                <li>When the blue "Windows protected your PC" dialog appears, click <strong>More info</strong>.</li>
                <li>Click <strong>Run anyway</strong> to start the installer.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <HardDrive size={22} color="#38bdf8" />
            <h2 style={{ fontSize: '1.4rem' }}>Minimum System Requirements</h2>
          </div>
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
