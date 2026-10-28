import React from 'react';
import { Download, ExternalLink, Calendar, Tag } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { RELEASES, GITHUB_RELEASES_URL } from '../data/releases';

export const ChangelogPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Changelog — Package Guard Release Updates"
        description="Comprehensive release notes and changelog for Package Guard. Review all features, improvements, fixes, and Windows installer binaries."
      />

      <div className="container" style={{ maxWidth: '880px', paddingTop: '1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ marginBottom: '0.75rem' }}>Changelog</h1>
          <p style={{ maxWidth: '540px', margin: '0 auto', fontSize: '1.1rem' }}>
            A chronological timeline of updates, installer formats, feature releases, and technical notes for Package Guard.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
          {RELEASES.map((rel) => (
            <div key={rel.version} className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>v{rel.version}</h2>
                    <span className="badge badge-emerald">Stable Release</span>
                    <span className="badge badge-cyan">{rel.targetPlatform} (x64)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} />
                      {rel.displayDate}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Tag size={13} />
                      {rel.tag}
                    </span>
                  </div>
                </div>

                <a
                  href={rel.githubReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <span>Release on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Overview & Release Note</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                  {rel.releaseNotesSummary}
                </p>

                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Key Capabilities & Features</h3>
                <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  {rel.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '1.05rem', margin: '1.25rem 0 0.5rem' }}>Available Installer Formats</h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.75rem',
                  marginTop: '0.75rem'
                }}>
                  {rel.installers.map((inst) => (
                    <div
                      key={inst.id}
                      style={{
                        background: 'rgba(2, 6, 23, 0.45)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.85rem'
                      }}
                    >
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {inst.formatName}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                        Size: {inst.fileSizeFormatted} • x64
                      </div>
                      <a href={inst.downloadPath} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                        <Download size={13} />
                        <span>Download {inst.extension.toUpperCase()}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--border-subtle)', marginTop: '3.5rem' }}>
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
              <span>View Git Repository & Tags</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
