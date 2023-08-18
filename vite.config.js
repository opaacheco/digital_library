import { defineConfig } from 'vite';
import {resolve} from 'path'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, './src/Pages/Home.jsx'),
        afiliacoes: resolve(__dirname, './src/Pages/Afiliacoes.jsx'),
        ebooks: resolve(__dirname, './src/Pages/Ebooks.jsx'),
        averdadeiraleidocodigodeatracao: resolve(__dirname, './src/Pages/AVerdadeiraLeiDoCodigoDeAtracao.jsx'),
        comoacessar: resolve(__dirname, './src/Pages/ComoAcessar.jsx'),
        daquiumanovocevaidesejartercomecadohoje: resolve(__dirname, './src/Pages/DaquiUmAnoVoceVaiDesejarTerComecadoHoje.jsx'),
        pequenoscristos: resolve(__dirname, './src/Pages/PequenosCristos.jsx'),
        psicanaliseeracismo: resolve(__dirname, './src/Pages/PsicanaliseERacismo.jsx'),
        setedicasgerenciamentotempo: resolve(__dirname, './src/Pages/SeteDicasGerenciamentoTempo.jsx'),
        setemaneiraspelasquaisaansiedadepodestardevorandolentamenteasuavida: resolve(__dirname, './src/Pages/SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida.jsx'),
        verdadeirocristao: resolve(__dirname, './src/Pages/VerdadeiroCristao.jsx')
        // adicione outras páginas aqui
      },
    },
  },
});