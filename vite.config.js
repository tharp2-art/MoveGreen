import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias für den src-Ordner
    },
  },
  publicDir: 'public', // Statisches Verzeichnis für Assets (z. B. images, favicon)
  build: {
    outDir: 'build', // Zielordner für den Build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Absoluter Pfad zur index.html
      external: [
        'mapbox-gl/dist/mapbox-gl.css', // Mapbox CSS-Datei externalisieren
      ],
    },
  },
  server: {
    port: 3000, // Entwicklungsserver-Port
    open: true, // Browser nach Start automatisch öffnen
  },
});
