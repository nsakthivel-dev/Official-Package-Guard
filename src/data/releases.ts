export interface ReleaseMetadata {
  version: string;
  tag: string;
  releaseName: string;
  isStable: boolean;
  isPrerelease: boolean;
  releaseDate: string; // ISO or YYYY-MM-DD
  displayDate: string;
  installerFilename: string;
  downloadUrl: string;
  architecture: 'x64' | 'arm64' | 'x86' | 'universal';
  architectureLabel: string;
  fileSizeBytes: number;
  fileSizeFormatted: string;
  sha256: string;
  silentInstallSwitch: string;
  digitalSignatureStatus: 'signed' | 'unsigned' | 'pending';
  digitalSignatureDetails: string;
  minimumRequirements: {
    os: string;
    architecture: string;
    ram: string;
    storage: string;
    permissions: string;
  };
  highlights: string[];
  notes: string[];
  githubReleaseUrl: string;
}

export const RELEASES: ReleaseMetadata[] = [
  {
    version: '1.0.0',
    tag: 'v1.0.0',
    releaseName: 'Package Guard 1.0.0 — Windows Installer',
    isStable: true,
    isPrerelease: false,
    releaseDate: '2026-10-27',
    displayDate: 'October 27, 2026',
    installerFilename: 'PackageGuard-Setup.exe',
    downloadUrl: 'https://github.com/nsakthivel-dev/Package-Guard/releases/download/v1.0.0/PackageGuard-Setup.exe',
    architecture: 'x64',
    architectureLabel: 'Windows 64-bit (x64)',
    fileSizeBytes: 93196896,
    fileSizeFormatted: '88.9 MB',
    sha256: '910dc34efd313670e1c1d1c1ac1d16815ce132cffcdf53b4b84c1ed9dffa9f8d',
    silentInstallSwitch: '/S',
    digitalSignatureStatus: 'unsigned',
    digitalSignatureDetails: 'Standard NSIS binary. Not EV-signed (Windows SmartScreen prompt may appear on first launch; select More info -> Run anyway).',
    minimumRequirements: {
      os: 'Windows 10 (version 1809 or higher) / Windows 11',
      architecture: 'x64 (64-bit AMD/Intel processor)',
      ram: '4 GB minimum (8 GB recommended)',
      storage: '250 MB free disk space',
      permissions: 'Standard user installation (Administrator elevation optional)'
    },
    highlights: [
      'Official standalone Windows Desktop installer (.exe)',
      'Automated local dependency state management and security auditing',
      'High-performance background audit worker using Electron & Node.js',
      'Headless / silent installation capability via /S switch',
      'Local-first privacy model: zero telemetry or tracking transmitted'
    ],
    notes: [
      'Packaged with NSIS installer engine for clean setup and uninstallation.',
      'Verified binary asset published directly on GitHub Releases.',
      'Includes built-in integrity hashing for verification via PowerShell Get-FileHash.'
    ],
    githubReleaseUrl: 'https://github.com/nsakthivel-dev/Package-Guard/releases/tag/v1.0.0'
  }
];

export const LATEST_STABLE_RELEASE: ReleaseMetadata = RELEASES[0];

export const GITHUB_REPO_URL = 'https://github.com/nsakthivel-dev/Package-Guard';
export const GITHUB_RELEASES_URL = 'https://github.com/nsakthivel-dev/Package-Guard/releases';
export const GITHUB_ISSUES_URL = 'https://github.com/nsakthivel-dev/Package-Guard/issues';
