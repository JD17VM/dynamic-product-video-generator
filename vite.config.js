import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './src/web', // Importante: Indica la carpeta raíz de tu app web
  build: {
    outDir: '../../dist/web' // Ajusta la carpeta de salida si es necesario
  },
  server: {
    port: 5174
  }
});