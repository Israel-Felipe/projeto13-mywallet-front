import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Topo, Registro } from "./Styled-Entrada-Saida.js";

export default function TelaEntrada () {
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [botao, setBotao] = useState("Salvar entrada");
    const [isDisabled, setIsDisabled] = useState(false);
    

    function enviarEntrada (e) {

    }

return (
    <Container>
        <Topo>
            <h1>Nova entrada</h1>
        </Topo>

        <Registro onSubmit={enviarEntrada}>
                <input placeholder="Valor" type="number" value={valor} onChange={e => setValor(e.target.value)} required disabled={isDisabled} /> {/* https://dev.to/vanribeiro/formatando-numeros-e-moedas-com-tolocalestring-2j97 */}
                <input placeholder="Descrição" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required disabled={isDisabled} />
                
                <button type="submit" disabled={isDisabled}>
                    <div>{botao}</div>
                </button>
                
            </Registro>
    </Container>
)
}