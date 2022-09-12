import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  gap: 40px;
`;

export const Topo = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
  }
`;

export const Registro = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;

  input,
  button {
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
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    height: 45px;
    background-color: #a328d6;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
