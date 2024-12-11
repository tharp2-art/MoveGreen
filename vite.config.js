import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Setzt '@' auf den src-Ordner
    },
  },
  build: {
    rollupOptions: {
      external: [
        'mapbox-gl/dist/mapbox-gl.css', // Externalisiere die Mapbox CSS
      ],
    },
  },
});
