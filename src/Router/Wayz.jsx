import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarMain from '../Layout/NavbarMain';
import Footer from '../Layout/Footer';

import Home from '../Pages/Home';
import Ebooks from '../Pages/Ebooks';
import Afiliacoes from '../Pages/Afiliacoes';
import ComoAcessar from '../Pages/ComoAcessar';

import SeteDicasGerenciamentoTempo from '../Pages/SeteDicasGerenciamentoTempo';
import AVerdadeiraLeiDoCodigoDeAtracao from '../Pages/AVerdadeiraLeiDoCodigoDeAtracao';
import SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida from '../Pages/SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida';
import PequenosCristos from '../Pages/PequenosCristos';
import PsicanaliseERacismo from '../Pages/PsicanaliseERacismo';
import VerdadeiroCristao from '../Pages/VerdadeiroCristao';
import DaquiUmAnoVoceVaiDesejarTerComecadoHoje from '../Pages/DaquiUmAnoVoceVaiDesejarTerComecadoHoje';

const Wayz = () => {
  return (
    <BrowserRouter> 
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/afiliacoes" element={<Afiliacoes />} />
        <Route path="/como-acessar" element={<ComoAcessar />} />
        <Route path="/7-dicas-de-gerenciamento-do-tempo" element={<SeteDicasGerenciamentoTempo />} />
        <Route path="/a-verdadeira-lei-do-codigo-de-atracao" element={<AVerdadeiraLeiDoCodigoDeAtracao />} />
        <Route path="/7-maneiras-pelas-quais-a-ansiedade-pode-estar-devorando-lentamente-a-sua-vida" element={<SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida />} />
        <Route path="/daqui-um-ano-voce-vai-desejar-ter-comecado-hoje" element={<DaquiUmAnoVoceVaiDesejarTerComecadoHoje />} />
        <Route path="/pequenos-cristos" element={<PequenosCristos />} />
        <Route path="/psicanalise-e-racismo" element={<PsicanaliseERacismo />} />
        <Route path="/verdadeiro-cristao" element={<VerdadeiroCristao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Wayz;