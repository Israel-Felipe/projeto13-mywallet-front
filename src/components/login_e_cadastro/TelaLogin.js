import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logar } from "../../services/services";

import { Corpo, Titulo, Login, Cadastro } from "./Styled-Login-Cadastro";

export default function TelaLogin () {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [botao, setBotao] = useState("Entrar");
    const [isDisabled, setIsDisabled] = useState(false);

    function fazerLogin (e) {
        e.preventDefault();
        setIsDisabled(true);

        const loginAPI = {
            email,
            password,
        }
    
        logar (loginAPI)
        .then((res) => {  
            const usuario = res.data;
            const usuarioSerial = JSON.stringify(usuario);
            localStorage.setItem("user", usuarioSerial);
            navigate('Home');
        })
        .catch(() => {
            alert("Login ou senha incorretos");
            setIsDisabled(false);
        });
    }

    return (
        <Corpo>
            <Titulo> MyWallet </Titulo>

            <Login onSubmit={fazerLogin}>
                <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={isDisabled} />
                <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required disabled={isDisabled} />
                
                <button type="submit" disabled={isDisabled}>
                    <div>{botao}</div>
                </button>
                
            </Login>
            
            <Link to={`/cadastro`}>
                <Cadastro disabled={isDisabled}>
                    Primeira vez? Cadastre-se!
                </Cadastro>
            </Link>

        </Corpo>
    )
}