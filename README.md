# 🛡️ Package Guard — Official Website

Official public website for **Package Guard**, the local software dependency state management and security auditing tool for Windows.

- **Production Framework**: React 18 + TypeScript + Vite
- **Hosting Platform**: Vercel (Static Deployment)
- **Primary Installer Distribution**: GitHub Releases ([nsakthivel-dev/Package-Guard/releases](https://github.com/nsakthivel-dev/Package-Guard/releases))
- **Verified Installer**: `PackageGuard-Setup.exe` (v1.0.0, x64)

---

## 📁 Architecture & Separation of Concerns

As mandated by security and architecture best practices:
1. **Desktop Application Source**: Maintained in the separate desktop repository (`nsakthivel-dev/Package-Guard`). Never copied or embedded into the website tree.
2. **Binary Assets (.exe)**: Windows installers are attached directly to versioned releases on GitHub Releases. Installers are **NEVER** committed to this Git repository or bundled in static build output.
3. **Release Manifest**: All download links, hashes, version tags, and requirements are centralized in [`src/data/releases.ts`](src/data/releases.ts).

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ (tested on Node v22.x)
- npm 9+

### Quick Start
```bash
# Clone the repository
git clone https://github.com/nsakthivel-dev/Package-Guard-Website.git
cd Package-Guard-Website

# Install dependencies
npm install

# Start local development server (Vite)
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

To preview the built static bundle locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This project is configured out-of-the-box for zero-configuration static deployment on Vercel.

### Option A: Vercel Git Integration (Recommended)
1. Push this repository to GitHub (e.g., `nsakthivel-dev/package-guard-website`).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

### Option B: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Vercel Routing & Security Configuration
The included [`vercel.json`](vercel.json) handles:
- Single-Page Application (SPA) client-side rewrites to `/index.html` for direct route deep-linking and clean URLs (`/download`, `/docs`, `/releases`, etc.).
- Strict HTTP security headers: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- Long-term caching for static assets under `/assets/`.

---

## 📦 How to Update Releases

When a new version of the Package Guard desktop installer is published:

1. Upload the new `.exe` asset (e.g., `PackageGuard-Setup.exe`) to GitHub Releases under a new tag (e.g., `v1.1.0`).
2. Run PowerShell to compute the exact SHA-256 hash and byte size:
   ```powershell
   Get-FileHash -Algorithm SHA256 .\PackageGuard-Setup.exe
   (Get-Item .\PackageGuard-Setup.exe).Length
   ```
3. Update [`src/data/releases.ts`](src/data/releases.ts) with:
   - `version`: e.g. `'1.1.0'`
   - `tag`: e.g. `'v1.1.0'`
   - `downloadUrl`: Direct GitHub Release asset link
   - `fileSizeBytes` & `fileSizeFormatted`
   - `sha256`
   - `highlights` and `notes`
4. Run `npm run build` to verify the build.
5. Commit and push to deploy the update to Vercel automatically.

---

## 🏢 Microsoft Partner Center Considerations

If distributing Package Guard through the Microsoft Store or Partner Center:

1. **Package URL Requirement**: The Partner Center package URL must point directly to the versioned `.exe` asset hosted on GitHub Releases, **not** to this website homepage.
2. **Silent Install**: The installer supports standard NSIS silent installation using the `/S` switch (`PackageGuard-Setup.exe /S`).
3. **Digital Signature**: The current release is an unsigned open-source binary. For Microsoft Store or EV requirements, a trusted Code Signing Certificate must be applied via `signtool.exe`.
4. **Host Policy**: Hosting the website on Vercel does not automatically make Vercel the host for the Windows executable. GitHub Releases serves as the binary distribution host.

---

## 📄 License & Attribution

- Website code is released under the MIT License.
- Package Guard is an open-source project by nsakthivel-dev and community contributors.
