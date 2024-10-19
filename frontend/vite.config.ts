import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

 
export default defineConfig({
    base: '',
    plugins: [react()], // Removed viteTsconfigPaths from here
    server: {
        open: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
});