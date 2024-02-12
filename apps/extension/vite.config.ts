import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import webExtension from 'vite-plugin-web-extension';
import pkg from './package.json';
import manifest from './src/manifest.json';

function generateManifest() {
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webExtension({
      manifest: generateManifest,
    }),
  ],
  resolve: {
    alias: {
      // In dev mode, make sure fast refresh works
      '/@react-refresh': path.resolve(
        'node_modules/@vitejs/plugin-react-swc/refresh-runtime.js',
      ),
    },
  },
  define: {
    'process.env': process.env,
  },
});
