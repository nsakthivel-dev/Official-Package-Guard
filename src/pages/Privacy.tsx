import React from 'react';
import { EyeOff } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { GITHUB_REPO_URL } from '../data/releases';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy — Package Guard"
        description="Public Privacy Policy for Package Guard desktop application and official website. Transparent disclosure: zero telemetry, 100% local analysis, and no cloud exfiltration."
      />

      <div className="container" style={{ maxWidth: '880px', paddingTop: '1.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">Privacy Policy</span>
            <span className="badge badge-cyan">Zero Telemetry</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Effective Date: October 27, 2026 • Last Reviewed: Current Release
          </p>
        </div>

        {/* Commitment Highlight */}
        <div className="card" style={{ marginBottom: '2.5rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <EyeOff size={28} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#34d399' }}>
                Our Core Privacy Guarantee: Local-First & Air-Gapped
              </h3>
              <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.98rem' }}>
                Package Guard is built on the principle that your source code, package manifests, and dependency architecture are confidential. The desktop application performs all analysis locally on your Windows machine and transmits zero telemetry or analytics back to our developers or any third parties.
              </p>
            </div>
          </div>
        </div>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>1. Desktop Application Data Practices</h2>
          <p style={{ marginBottom: '0.75rem' }}>
            When you install and run Package Guard on Windows:
          </p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            <li>
              <strong>No Manifest Exfiltration:</strong> Package Guard reads project lockfiles (e.g. <code>package.json</code>, lockfiles) strictly from your local filesystem. These manifests are never transmitted across the network.
            </li>
            <li>
              <strong>No Telemetry or User Analytics:</strong> We do not track button clicks, scan durations, frequency of use, error logs, or user sessions.
            </li>
            <li>
              <strong>No Machine or Identity Fingerprinting:</strong> Package Guard does not collect hardware UUIDs, MAC addresses, Windows account usernames, or IP addresses.
            </li>
            <li>
              <strong>Local Cache:</strong> Any state indices or scan results created by Package Guard are saved strictly in your local user directory.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>2. Official Website & Download Infrastructure</h2>
          <p style={{ marginBottom: '0.75rem' }}>
            When visiting this website (<code>packageguard.vercel.app</code>) or downloading releases:
          </p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            <li>
              <strong>Website Hosting (Vercel):</strong> The website is statically hosted on Vercel. Standard web server logs (HTTP request headers, IP address, user agent) are processed by Vercel for DDoS prevention, edge caching, and security enforcement according to Vercel's Privacy Policy.
            </li>
            <li>
              <strong>Binary Distribution (GitHub Releases):</strong> Windows installer executables are hosted as release assets on GitHub (Microsoft). When downloading the installer, your connection is handled directly by GitHub's Content Delivery Network (CDN) according to GitHub's Privacy Statement.
            </li>
            <li>
              <strong>No Tracking Cookies:</strong> This website does not set advertising cookies, analytics beacons, or marketing pixels. Your dark/light theme preference is saved strictly in your browser's local storage.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>3. Third-Party Services & Dependencies</h2>
          <p style={{ marginBottom: '0.75rem' }}>
            The Package Guard desktop application does not include third-party advertising SDKs, tracking pixels, or monetization libraries.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>4. Changes to This Policy</h2>
          <p style={{ marginBottom: '0.75rem' }}>
            Any modifications to our privacy practices will be documented in this public document and committed transparently to the website's version control.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>5. Inquiries & Community Verification</h2>
          <p>
            If you have questions regarding privacy or wish to inspect our data architecture, please open an inquiry on our public repository:
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              {GITHUB_REPO_URL}
            </a>
          </p>
        </section>
      </div>
    </>
  );
};
