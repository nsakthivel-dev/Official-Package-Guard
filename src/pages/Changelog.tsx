import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { RELEASES, GITHUB_RELEASES_URL } from '../data/releases';

export const ChangelogPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Changelog — Package Guard"
        description="Comprehensive changelog and release history for Package Guard. Verified modifications, new capabilities, and binary releases by version."
      />

      <div className="container" style={{ maxWidth: '900px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">Verified Changelog</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Package Guard Changelog</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            All notable changes and releases for the Package Guard Windows desktop application.
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--border-subtle)', marginLeft: '1rem' }}>
          {RELEASES.map((rel) => (
            <div key={rel.version} style={{ marginBottom: '3.5rem', position: 'relative' }}>
              {/* Timeline marker */}
              <div style={{
                position: 'absolute',
                left: '-2.65rem',
                top: '0.2rem',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#10b981',
                border: '3px solid var(--bg-primary)',
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Version {rel.version}</h2>
                <span className="badge badge-emerald">Stable</span>
                <span className="badge badge-cyan">{rel.architectureLabel}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{rel.displayDate}</span>
              </div>

              <div className="card" style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>What's New in {rel.version}</h3>
                <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  {rel.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '1.05rem', margin: '1.25rem 0 0.5rem' }}>Installer & Distribution</h3>
                <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  <li>Official NSIS installer binary: <code>{rel.installerFilename}</code> ({rel.fileSizeFormatted})</li>
                  <li>Target Architecture: 64-bit Windows 10 & 11 (x64)</li>
                  <li>Headless automation switch: <code>{rel.silentInstallSwitch}</code></li>
                  <li>SHA-256 Digest: <code style={{ fontSize: '0.82rem', wordBreak: 'break-all' }}>{rel.sha256}</code></li>
                </ul>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={rel.downloadUrl} className="btn btn-primary btn-sm">
                    <Download size={14} />
                    <span>Download {rel.installerFilename}</span>
                  </a>
                  <a
                    href={rel.githubReleaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>View GitHub Release</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Historical Git commits and release tags can also be viewed in the repository:
          </p>
          <div style={{ marginTop: '1rem' }}>
            <a
              href={GITHUB_RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>View GitHub Releases History</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
