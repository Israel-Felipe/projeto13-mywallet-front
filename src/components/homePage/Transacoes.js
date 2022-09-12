import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { deleteLogin, getTransacao } from "../../services/services";

import sair from "../../images/logout.svg";
import entrada from "../../images/entrada.svg";
import saida from "../../images/saida.svg";
import BoxTransacoes from "./BoxTransacoes";

import { Container, Topo, Menu, Buttons } from "./Styled-Home";

export default function Transacoes() {
  const usuario = JSON.parse(localStorage.getItem("mywallet"))?.usuario;
  const [transacoes, setTransacoes] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

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

  if (!usuario) {
    return <Navigate to="/" />;
  } else {
    return (
      <Container>
        <Topo>
          <h1>Olá, {usuario}</h1>
          <img src={sair} alt="logout" onClick={logout} />
        </Topo>

        <BoxTransacoes
          transacoes={transacoes}
          reload={reload}
          setReload={setReload}
        />

        <Menu>
          <Buttons onClick={() => handleClick("entrada")}>
            <img src={entrada} alt="entrada" />
            <h2>Nova entrada</h2>
          </Buttons>
          <Buttons onClick={() => handleClick("saída")}>
            <img src={saida} alt="entrada" />
            <h2>Nova saída</h2>
          </Buttons>
        </Menu>
      </Container>
    );
  }
}
