import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import NavbarMain from './Layout/NavbarMain';
import Footer from './Layout/Footer';

import Home from './Pages/Home';
import Ebooks from './Pages/Ebooks';
import Afiliacoes from './Pages/Afiliacoes';
import ComoAcessar from './Pages/ComoAcessar';

import SeteDicasGerenciamentoTempo from './Pages/SeteDicasGerenciamentoTempo';
import AVerdadeiraLeiDoCodigoDeAtracao from './Pages/AVerdadeiraLeiDoCodigoDeAtracao';
import SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida from './Pages/SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida';
import PequenosCristos from './Pages/PequenosCristos';
import PsicanaliseERacismo from './Pages/PsicanaliseERacismo';
import VerdadeiroCristao from './Pages/VerdadeiroCristao';
import DaquiUmAnoVoceVaiDesejarTerComecadoHoje from './Pages/DaquiUmAnoVoceVaiDesejarTerComecadoHoje';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/ebooks",
        element: <Ebooks />
      },
      {
        path: "/afiliacoes",
        element: <Afiliacoes />
      },
      {
        path: "/ComoAcessar",
        element: <ComoAcessar />
      },  
      {
        path: "/SeteDicasGerenciamentoTempo",
        element: <SeteDicasGerenciamentoTempo />
      },
      {
        path: "/AVerdadeiraLeiDoCodigoDeAtracao",
        element: <AVerdadeiraLeiDoCodigoDeAtracao />
      },
      {
        path: "/SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida",
        element: <SeteManeirasPelasQuaisAAnsiedadePodeEstarDevorandoLentamenteASuaVida />
      },
      {
        path: "/PequenosCristos",
        element: <PequenosCristos />
      },
      {
        path: "/PsicanaliseERacismo",
        element: <PsicanaliseERacismo />
      },
      {
        path: "/VerdadeiroCristao",
        element: <VerdadeiroCristao />
      },
      {
        path: "/DaquiUmAnoVoceVaiDesejarTerComecadoHoje",
        element: <DaquiUmAnoVoceVaiDesejarTerComecadoHoje />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
