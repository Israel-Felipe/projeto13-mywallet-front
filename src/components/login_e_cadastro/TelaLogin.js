import { Navigate, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { postLogin } from "../../services/services";

import { Corpo, Titulo, Login, Cadastro } from "./Styled-Login-Cadastro";

export default function TelaLogin() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("mywallet"));

  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function fazerLogin(e) {
    e.preventDefault();
    setIsDisabled(true);

    const loginAPI = {
      email,
      senha,
    };

    postLogin(loginAPI)
      .then((res) => {
        const token = res.data.token;
        const usuario = res.data.usuario;
        const infoJSON = JSON.stringify({ token, usuario });
        localStorage.setItem("mywallet", infoJSON);

        navigate("/transactions");
      })
      .catch(() => {
        alert("Login ou senha incorretos");
        setIsDisabled(false);
      });
  }

  if (auth) {
    return <Navigate to="/transacoes" />;
  } else {
    return (
      <Corpo>
        <Titulo> MyWallet </Titulo>

        <Login onSubmit={fazerLogin}>
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
            onChange={(e) => setsenha(e.target.value)}
            required
            disabled={isDisabled}
          />

          <button type="submit" disabled={isDisabled}>
            <div>Entrar</div>
          </button>
        </Login>

        <Link to={`/cadastro`}>
          <Cadastro disabled={isDisabled}>Primeira vez? Cadastre-se!</Cadastro>
        </Link>
      </Corpo>
    );
  }
}
