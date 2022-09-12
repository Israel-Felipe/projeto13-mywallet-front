import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { postTransacao } from "../../services/services";

import { Container, Topo, Registro } from "./Styled-Entrada-Saida.js";

export default function FormularioTransacao() {
  const { type } = useLocation().state;
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();

  function enviarEntrada(e) {
    e.preventDefault();
    setIsDisabled(true);
    const amount = valor.replace(",", ".");

    const transacao = {
      valor: amount,
      descricao,
      type,
    };
    postTransacao(transacao)
      .then(() => {
        navigate("/transacao");
      })
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
      });
  }

  return (
    <Container>
      <Topo>
        <h1>Nova {type}</h1>
      </Topo>

      <Registro onSubmit={enviarEntrada}>
        <input
          placeholder="Valor"
          type="text"
          name="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
          pattern="[0-9]+([,\.][0-9]+)?"
          disabled={isDisabled}
        />
        <input
          placeholder="Descrição"
          type="text"
          name="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          disabled={isDisabled}
        />

        <button type="submit" disabled={isDisabled}>
          <div>Salvar</div>
        </button>
      </Registro>
    </Container>
  );
}
