import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname manually for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'html2pdf.js': path.resolve(__dirname, 'node_modules/html2pdf.js'),
    },
  },
});
