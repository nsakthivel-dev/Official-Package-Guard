import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy — Package Guard"
        description="Official Privacy Policy for Package Guard. Effective date: October 23, 2026. Developer / Publisher: Sakthivel N. Comprehensive disclosure on local SQLite storage, zero telemetry, and package registry connections."
      />

      <div className="container" style={{ maxWidth: '900px', paddingTop: '1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-emerald">Official Privacy Policy</span>
            <span className="badge badge-cyan">Local-First</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={32} color="#10b981" />
            <h1 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', margin: 0 }}>Package Guard Privacy Policy</h1>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            <strong>Effective date:</strong> October 23, 2026
          </p>
        </div>

        {/* Policy Body */}
        <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
          {/* Section 1 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              1. Introduction
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard is a Windows desktop application designed to help developers inspect and manage software dependency state through a graphical interface and the <code style={{ color: 'var(--accent-cyan)' }}>pg</code> command-line tool.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              This Privacy Policy explains how Package Guard handles information when you use the application.
            </p>
            <p>
              Our design principle is local-first operation. Application data is stored locally on your computer, and Package Guard does not intentionally collect personal information or transmit application usage data to us.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard does not intentionally collect or transmit personal information, usage analytics, telemetry, or tracking data to its developer.
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              The application may store information locally on your computer that is necessary for its functionality, including:
            </p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              <li>Dependency state and package-related information.</li>
              <li>Application history and records of supported operations.</li>
              <li>Local application configuration and preferences.</li>
              <li>Other technical data required by the application's features.</li>
            </ul>
            <p style={{ marginBottom: '0.75rem' }}>
              This information is stored locally and is not intentionally transmitted to the developer as part of Package Guard's normal operation.
            </p>
            <p>
              Information contained in your software projects or dependency metadata may include personal or confidential information. You are responsible for reviewing such information before sharing it with other parties.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              3. Local Storage
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard uses a local SQLite database for supported application data and history.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Application data is stored on your computer in the application's designated local data directory. The exact storage location may depend on the installation and configuration.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard does not operate a developer-hosted cloud database for storing your application history.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Access to locally stored information is subject to your Windows account permissions and the security of your device. You can manage locally stored application data through the available application features or documented data-management instructions.
            </p>
            <p>
              Uninstalling Package Guard may not automatically delete every user-data file. Back up any information you want to retain before uninstalling or modifying application data.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              4. Network Connections and Package Registries
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard may connect to external package registries or related services when you perform package-related operations.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              These connections may be used to retrieve package metadata, dependency information, or other information required by the requested operation.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              External registries and services operate under their own privacy policies and terms. When your computer connects to those services, they may receive technical information associated with the connection, such as your IP address, request details, or user-agent information, depending on the service and connection method.
            </p>
            <p>
              Package Guard does not control the data practices of external registries. Review the applicable service's privacy policy for details about its handling of connection data.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              5. Analytics, Telemetry, and Advertising
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard is designed without built-in usage analytics, behavioral tracking, or advertising telemetry.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              We do not intentionally transmit application usage statistics, dependency history, or local database contents to the developer for analytics or advertising purposes.
            </p>
            <p>
              This statement describes Package Guard's intended behavior and does not cover telemetry that may be independently provided by Windows, external package registries, or other software installed on your computer.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              6. Third-Party Services
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard may interact with package registries or other external services required by supported functionality.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Those services are independent of the Package Guard developer. Their availability, security, data collection, and privacy practices are governed by their own policies.
            </p>
            <p>
              Package Guard does not claim to control or guarantee the privacy practices of third-party services.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              7. Data Security
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Package Guard is designed to keep its application data on the user's computer.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              You are responsible for maintaining appropriate security on your device, including operating-system updates, account protection, backups, and access permissions.
            </p>
            <p>
              No method of local storage or electronic communication can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              8. Children's Privacy
            </h2>
            <p>
              Package Guard is a developer-oriented utility and is not designed to collect personal information from children. The application does not intentionally collect personal information from any user.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              9. Your Privacy Choices
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              Because Package Guard does not intentionally collect personal information for the developer's own use, it does not maintain a developer-hosted account or personal-data portal for this purpose.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              You can control your use of the application, manage relevant local files, and choose whether to perform operations that connect to external package registries.
            </p>
            <p>
              Requests concerning data held by third-party services should be directed to those services.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              10. Changes to This Policy
            </h2>
            <p style={{ marginBottom: '0.75rem' }}>
              This Privacy Policy may be updated when Package Guard's functionality or data practices change.
            </p>
            <p>
              The revised policy will include an updated effective date. Users should review this policy periodically for changes.
            </p>
          </section>

          {/* Section 11 */}
          <section style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              11. Contact
            </h2>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Application</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>Package Guard</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Developer / Publisher</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>Sakthivel N</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Support Email</div>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>
                    <a href="mailto:nsakthiveldev@gmail.com" style={{ color: 'var(--accent-cyan)' }}>nsakthiveldev@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              This policy applies to Package Guard's own data practices and should be updated if future versions introduce analytics, account services, cloud storage, or other data collection.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
