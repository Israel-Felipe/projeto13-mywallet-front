import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

/* import PrivatePage from "./PrivatePage.js/PrivatePage"; */

import TelaLogin from "./login_e_cadastro/TelaLogin";
import TelaCadastro from "./login_e_cadastro/TelaCadastro";
import TelaHome from "./homePage/TelaHome";
import TelaNovaEntrada from "./add_entrada_saida/TelaNovaEntrada";
import TelaNovaSaida from "./add_entrada_saida/TelaNovaSaida";

export default function App() {

    return (
        <>
        <BrowserRouter>
            <GlobalStyled />
                    <Routes>
                        <Route path="/"          element={<TelaLogin />} />
                        <Route path="/cadastro"  element={<TelaCadastro />} />
                        <Route path="/home"  element={<TelaHome/>} />




{/*                         <Route path="/home"     element={
                                                    <PrivatePage>
                                                        <Home />
                                                    </PrivatePage>
                                                } />

                        <Route path="/NovaEntrada"   element={
                                                    <PrivatePage>
                                                        <NovaEntrada />
                                                    </PrivatePage>
                                                } />

                        <Route path="/NovaSaida" element={
                                                    <PrivatePage>
                                                        <NovaSaida />
                                                    </PrivatePage>
                                                } /> */}
                    </Routes>
        </BrowserRouter>
        </>
    )
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