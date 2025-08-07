import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MjDelalamon/', // <- this is critical!
  plugins: [react()],
});
