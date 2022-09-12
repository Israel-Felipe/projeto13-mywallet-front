import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import sair from "../../images/logout.svg";
import entrada from "../../images/entrada.svg";
import saida from "../../images/saida.svg";

import { deleteLogin, getTransacao } from "../../services/services";

import { Container, Topo, Menu, Buttons } from "./Styled-Home";

import ListaTransacoes from "./ListaTransacoes";

export default function TelaHome() {
  const navigate = useNavigate();
  const [transacoes, setTransacoes] = useState([]);
  const [reload, setReload] = useState(false);
  const usuario = JSON.parse(localStorage.getItem("mywallet"))?.usuario;

  useEffect(() => {
    getTransacao()
      .then((res) => {
        setTransacoes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  function handleClick(tipo) {
    navigate("/transacao", { state: { tipo } });
  }

  function logout() {
    const confirm = window.confirm("Tem certeza que deseja sair?");

    if (confirm) {
      deleteLogin()
        .then(() => {
          localStorage.removeItem("mywallet");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <Container>
      <Topo>
        <h1>Olá, {usuario.nome} </h1>
        <img src={sair} alt="logout" onClick={logout} />
      </Topo>

      <ListaTransacoes
        transacoes={transacoes}
        handleClick={handleClick}
        reload={reload}
        setReload={setReload}
      />

      <Menu>
        <Buttons onClick={() => handleClick("entrada")}>
          <img src={entrada} alt="entrada" />
          <h2>Nova entrada</h2>
        </Buttons>
        <Buttons onClick={() => handleClick("saida")}>
          <img src={saida} alt="saida" />
          <h2>Nova saída</h2>
        </Buttons>
      </Menu>
    </Container>
  );
}
