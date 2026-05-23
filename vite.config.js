import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Expose Vite public env vars to the client.
  envPrefix: ['VITE_'],
});
