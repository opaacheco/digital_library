import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        Home: 'src/Pages/Home.jsx',
        Afiliacoes: 'src/Pages/Afiliacoes.jsx',
        // adicione outras páginas aqui
      },
    },
  },
});