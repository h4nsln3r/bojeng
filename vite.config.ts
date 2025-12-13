import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/bojeng/', // 👈 viktigt för GitHub Pages /bojeng/
  plugins: [react(), tsconfigPaths()],
  server: { port: 5173, open: true },
  build: { sourcemap: true },
});
