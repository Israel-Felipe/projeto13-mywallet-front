import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

/* import PrivatePage from "./PrivatePage.js/PrivatePage"; */

import TelaLogin from "./login_e_cadastro/TelaLogin";
import TelaCadastro from "./login_e_cadastro/TelaCadastro";
import TelaHome from "./homePage/TelaHome";
import FormularioTransacao from "./add_entrada_saida/FormularioTransacao.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/transacoes" element={<TelaHome />} />
          <Route path="/transacao" element={<FormularioTransacao />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyled = createGlobalStyle`
    ${reset}
    
    *, body {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        cursor: default;
    body {
        background-color: #8C11BE;
    }
        
    a {
        text-decoration: none;
    }
    }
`;
