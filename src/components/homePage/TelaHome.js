import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logout from "../../images/logout.svg";
import entrada from "../../images/entrada.svg";
import saida from "../../images/saida.svg";

import { Container, Topo, BoxExtrato, Menu, Buttons } from "./Styled-Home";

export default function TelaHome () {
    
return (
    <Container>
        <Topo>
            <h1>Olá, Fulano</h1>
            <img src={logout} alt="logout" />
        </Topo>

        <BoxExtrato>

        </BoxExtrato>

        <Menu>
            <Buttons>
                <img src={entrada} alt="entrada" />
                <h2>Nova entrada</h2>
            </Buttons>
            <Buttons>
                <img src={saida} alt="entrada" />
                <h2>Nova saída</h2>
            </Buttons>
        </Menu>
    </Container>
)
}