import React from 'react';
import { Download, ShieldCheck, Tag, Calendar, HardDrive, ExternalLink } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { CodeSnippet } from '../components/CodeSnippet';
import { RELEASES, GITHUB_RELEASES_URL } from '../data/releases';

export const ReleasesPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Releases & Version History — Package Guard"
        description="Official release history for Package Guard. Access verified Windows binary installers, release notes, SHA-256 integrity digests, and version tags."
      />

      <div className="container" style={{ maxWidth: '940px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '0.75rem' }}>Release History</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            All verified releases of the Package Guard Windows Desktop application, packaged with NSIS and hosted on GitHub Releases.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {RELEASES.map((rel) => (
            <article
              key={rel.version}
              className="card"
              style={{
                border: rel.isStable ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid var(--border-subtle)',
                position: 'relative'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
                    <h2 style={{ fontSize: '1.6rem', margin: 0 }}>v{rel.version}</h2>
                    {rel.isStable && <span className="badge badge-emerald">Stable</span>}
                    {rel.isPrerelease && <span className="badge badge-amber">Pre-release</span>}
                    <span className="badge badge-cyan">{rel.architectureLabel}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} />
                      {rel.displayDate}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <HardDrive size={14} />
                      {rel.fileSizeFormatted} ({rel.fileSizeBytes.toLocaleString()} bytes)
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Tag size={14} />
                      {rel.tag}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={rel.downloadUrl}
                    className="btn btn-primary"
                    aria-label={`Download ${rel.installerFilename} for Windows`}
                  >
                    <Download size={16} />
                    <span>Download .exe</span>
                  </a>

                  <a
                    href={rel.githubReleaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    aria-label={`View release ${rel.version} on GitHub`}
                  >
                    <span>GitHub Release</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Release Highlights</h3>
                <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  {rel.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Technical Notes</h3>
                <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  {rel.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>

              {/* Verified Checksum */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={16} color="#34d399" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    SHA-256 Digest:
                  </span>
                </div>
                <CodeSnippet
                  title={rel.installerFilename}
                  language="sha256"
                  code={rel.sha256}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Footer Link to GitHub Releases */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '2rem 0', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Looking for historical commits or full tag metadata?
          </p>
          <a
            href={GITHUB_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>Browse Full GitHub Releases Archive</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </>
  );
};
