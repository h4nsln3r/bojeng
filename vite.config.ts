// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [react(), tsconfigPaths()],
  server: { port: 5173, open: true },
  build: {
    sourcemap: mode !== 'production', // ← av i prod
  },
}));
