import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ebooks: resolve(__dirname, 'Pages/Ebooks.jsx'),
        afiliacoes: resolve(__dirname, 'Pages/afilicaos.jsx'),
        AVerdadeiraLeiDoCodigoDeAtracao: resolve(__dirname, 'AVerdadeiraLeiDoCodigoDeAtracao.html'),
        ComoAcessar: resolve(__dirname, 'src/Pages/ComoAcessar.html'),
        DaquiUmAnoVoceVaiDesejarTerComecadoHoje: resolve(__dirname, 'DaquiUmAnoVoceVaiDesejarTerComecadoHoje.html'),
        PequenosCristos: resolve(__dirname, 'PequenosCristos.html'),
        PsicanaliseERacismo: resolve(__dirname, 'PsicanaliseERacismo.html'),
        SeteDicasGerenciamentoTempo: resolve(__dirname, 'SeteDicasGerenciamentoTempo.html'),
        SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida: resolve(__dirname, 'SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida.html'),
        VerdadeiroCristao: resolve(__dirname, 'VerdadeiroCristao.html'),
      }
    }
  }
})
