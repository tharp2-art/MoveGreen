export default {
  build: {
    outDir: "dist", // Zielverzeichnis innerhalb des Projekts
    emptyOutDir: true, // Löscht das Zielverzeichnis vor jedem Build
    rollupOptions: {
      external: ['mapbox-gl/dist/mapbox-gl.css'], // Behandle die CSS-Datei als extern
    },
  },
};
