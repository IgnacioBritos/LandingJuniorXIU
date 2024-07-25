import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/docs/' // Asegúrate de que esto refleje la ruta base correcta
});
