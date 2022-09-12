import { useNavigate, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { postCadastro } from "../../services/services";

import { Corpo, Titulo, Login, Cadastro } from "./Styled-Login-Cadastro";

export default function TelaCadastro() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("mywallet"));

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfSenha] = useState("");
  const [botao, setBotao] = useState("Cadastrar");
  const [isDisabled, setIsDisabled] = useState(false);

  function fazerCadastro(e) {
    e.preventDefault();
    setIsDisabled(true);

    if (senha !== confsenha) {
      alert("Confirmação de senha e senha devem ser iguais");
      setIsDisabled(false);
      return;
    }

    const cadastroAPI = {
      nome,
      email,
      senha,
    };

    postCadastro(cadastroAPI)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setBotao("Cadastrar");
        setIsDisabled(false);
      });
  }

  if (auth) {
    return <Navigate to="/transacoes" />;
  } else {
    return (
      <Corpo>
        <Titulo> MyWallet </Titulo>

        <Login onSubmit={fazerCadastro}>
          <input
            placeholder="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            disabled={isDisabled}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isDisabled}
          />
          <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            disabled={isDisabled}
          />
          <input
            placeholder="Confirme a senha"
            type="password"
            value={confsenha}
            onChange={(e) => setConfSenha(e.target.value)}
            required
            disabled={isDisabled}
          />
          <button type="submit" disabled={isDisabled}>
            <div>{botao}</div>
          </button>
        </Login>

        <Link to={`/`}>
          <Cadastro disabled={isDisabled}>
            Já tem uma conta? Entre agora!
          </Cadastro>
        </Link>
      </Corpo>
    );
  }
}
