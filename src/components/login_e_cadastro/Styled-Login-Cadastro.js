import styled from "styled-components";


export const Corpo = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
`

export const Titulo = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFFFFF;
    margin-bottom: 40px;
`

export const Login = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
    
    input, button {
        height: 58px;
        border: none;
        border-radius: 5px;
        color: #000000;
        font-size: 20px;
        padding: 15px;
    }
    input::placeholder {
        color: #868686;
    }
    textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
    button {
        height: 45px;
        background-color: #A328D6;
        color: #FFFFFF;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
`

export const Cadastro = styled.h1`
    margin-top: 35px;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`