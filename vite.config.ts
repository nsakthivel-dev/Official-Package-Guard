import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function downloadRedirectPlugin(): Plugin {
  const redirectHandler = (req: any, res: any, next: any) => {
    const url = req.url ? req.url.split('?')[0] : '';
    const match = url.match(/^\/downloads\/([^/]+)\/(.+)$/);
    if (match) {
      const [, version, filename] = match;
      let targetFile = filename;
      if (filename === 'PackageGuard-Setup.msi') {
        targetFile = 'PackageGuard-1.0.0-x64.msi';
      } else if (filename === 'PackageGuard-Setup.msix') {
        targetFile = 'PackageGuard-1.0.0-x64.msix';
      }
      const targetUrl = `https://github.com/nsakthivel-dev/Package-Guard/releases/download/v${version}/${targetFile}`;
      res.statusCode = 302;
      res.setHeader('Location', targetUrl);
      res.end();
      return;
    }
    next();
  };

  return {
    name: 'download-redirect-plugin',
    configureServer(server) {
      server.middlewares.use(redirectHandler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(redirectHandler);
    }
  };
}

export default defineConfig({
  plugins: [react(), downloadRedirectPlugin()],
  server: {
    port: 5180,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
