export type InstallerType = 'exe' | 'msi' | 'msix';

export interface InstallerOption {
  id: InstallerType;
  formatName: string;
  formatBadge: string;
  extension: string;
  filename: string;
  version: string;
  architecture: string;
  fileSizeBytes: number;
  fileSizeFormatted: string;
  sha256: string;
  downloadPath: string; // Permanent version-specific URL on domain
  directDownloadUrl: string; // GitHub release asset mirror
  description: string;
  detailedDescription: string;
  useCase: string;
  installCommand?: string;
  commandTitle?: string;
  recommended?: boolean;
}

export interface ReleaseMetadata {
  version: string;
  tag: string;
  releaseName: string;
  productName: string;
  targetPlatform: string;
  releaseNotesSummary: string;
  isStable: boolean;
  isPrerelease: boolean;
  releaseDate: string; // ISO or YYYY-MM-DD
  displayDate: string;
  installers: InstallerOption[];
  // Backwards compatibility properties
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
    productName: 'Package Guard',
    targetPlatform: 'Windows',
    releaseNotesSummary: 'Initial release of Package Guard for Windows.',
    releaseName: 'Package Guard 1.0.0 — Windows Installer',
    isStable: true,
    isPrerelease: false,
    releaseDate: '2026-10-27',
    displayDate: 'October 27, 2026',
    installers: [
      {
        id: 'exe',
        formatName: 'Windows Installer (.EXE)',
        formatBadge: 'Standard .EXE',
        extension: '.exe',
        filename: 'PackageGuard-Setup.exe',
        version: '1.0.0',
        architecture: 'x64 (64-bit)',
        fileSizeBytes: 93226610,
        fileSizeFormatted: '88.9 MB',
        sha256: 'FFF35E150FF672FA71F6E32FD74542A1524D2440362A612AD87A7442CD45D4F9',
        downloadPath: '/downloads/1.0.0/PackageGuard-Setup.exe',
        directDownloadUrl: 'https://github.com/nsakthivel-dev/Package-Guard/releases/download/v1.0.0/PackageGuard-Setup.exe',
        description: 'For users who want the traditional Windows installer.',
        detailedDescription: 'Traditional standalone setup wizard powered by NSIS. Automatically installs Package Guard, registers desktop and Start Menu shortcuts, and configures the CLI environment in user PATH.',
        useCase: 'Recommended for individual developers, workstations, and standard desktop installations.',
        installCommand: 'Start-Process -FilePath ".\\PackageGuard-Setup.exe" -ArgumentList "/S" -Wait',
        commandTitle: 'Silent Install Command (PowerShell)',
        recommended: true
      },
      {
        id: 'msi',
        formatName: 'Windows Installer (.MSI)',
        formatBadge: 'Enterprise .MSI',
        extension: '.msi',
        filename: 'PackageGuard-1.0.0-x64.msi',
        version: '1.0.0',
        architecture: 'x64 (64-bit)',
        fileSizeBytes: 101433476,
        fileSizeFormatted: '96.7 MB',
        sha256: 'DEA10C1C6EBFF8F31590BD515574C17A7BF7CED60EC7CE8EC87913EE2D329440',
        downloadPath: '/downloads/1.0.0/PackageGuard-1.0.0-x64.msi',
        directDownloadUrl: 'https://github.com/nsakthivel-dev/Package-Guard/releases/download/v1.0.0/PackageGuard-1.0.0-x64.msi',
        description: 'For users who need an MSI installer for supported Windows installation and deployment workflows.',
        detailedDescription: 'Standard Windows Installer (MSI) database engineered for enterprise provisioning, Active Directory Group Policy (GPO), Microsoft Intune, SCCM, and unattended silent workstation deployment.',
        useCase: 'Recommended for IT administrators, managed fleets, enterprise rollouts, and scripted provisioning.',
        installCommand: 'msiexec.exe /i PackageGuard-1.0.0-x64.msi /qn /norestart',
        commandTitle: 'Quiet / Unattended MSI Install Command (cmd / powershell)',
        recommended: false
      },
      {
        id: 'msix',
        formatName: 'Microsoft Store Package (.MSIX)',
        formatBadge: 'Modern .MSIX',
        extension: '.msix',
        filename: 'PackageGuard-1.0.0-x64.msix',
        version: '1.0.0',
        architecture: 'x64 (64-bit)',
        fileSizeBytes: 134584392,
        fileSizeFormatted: '128.3 MB',
        sha256: '4520CF754024B8609708D480CCDA7BA0341FD6ED49A7DDEF45F318CA5FDD4385',
        downloadPath: '/downloads/1.0.0/PackageGuard-1.0.0-x64.msix',
        directDownloadUrl: 'https://github.com/nsakthivel-dev/Package-Guard/releases/download/v1.0.0/PackageGuard-1.0.0-x64.msix',
        description: 'For users who want to install the MSIX package through a compatible Windows installation workflow.',
        detailedDescription: 'Modern containerized Windows application package supporting one-click setup via Windows App Installer, sandboxed execution, seamless auto-updates, and clean zero-residue uninstallation.',
        useCase: 'Recommended for modern Windows 10/11 environments, package managers (winget), and isolated app execution.',
        installCommand: 'Add-AppxPackage -Path ".\\PackageGuard-1.0.0-x64.msix"',
        commandTitle: 'PowerShell AppX Package Install Command',
        recommended: false
      }
    ],
    installerFilename: 'PackageGuard-Setup.exe',
    downloadUrl: '/downloads/1.0.0/PackageGuard-Setup.exe',
    architecture: 'x64',
    architectureLabel: 'Windows 64-bit (x64)',
    fileSizeBytes: 93226610,
    fileSizeFormatted: '88.9 MB',
    sha256: 'FFF35E150FF672FA71F6E32FD74542A1524D2440362A612AD87A7442CD45D4F9',
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
      'Official standalone Windows Desktop installer (.exe, .msi, .msix)',
      'Automated local dependency state management and security auditing',
      'High-performance background audit worker using Electron & Node.js',
      'Headless / silent installation capability via /S switch or msiexec /qn',
      'Local-first privacy model: zero telemetry or tracking transmitted'
    ],
    notes: [
      'Available in three tailored packages: traditional NSIS executable (.exe), enterprise Windows Installer (.msi), and modern app package (.msix).',
      'Verified binary assets published directly on GitHub Releases.',
      'Includes built-in cryptographic integrity digests for verification via PowerShell Get-FileHash.'
    ],
    githubReleaseUrl: 'https://github.com/nsakthivel-dev/Package-Guard/releases/tag/v1.0.0'
  }
];

export const LATEST_STABLE_RELEASE: ReleaseMetadata = RELEASES[0];

export const GITHUB_REPO_URL = 'https://github.com/nsakthivel-dev/Package-Guard';
export const GITHUB_RELEASES_URL = 'https://github.com/nsakthivel-dev/Package-Guard/releases';
export const GITHUB_ISSUES_URL = 'https://github.com/nsakthivel-dev/Package-Guard/issues';
