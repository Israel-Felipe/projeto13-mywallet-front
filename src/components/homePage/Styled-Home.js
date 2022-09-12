import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  gap: 15px;
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

export const Menu = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const Buttons = styled.div`
  width: 50%;
  height: 100%;
  background-color: #a328d6;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 20%;
    max-width: 30px;
  }

  h2 {
    width: 45px;
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
    position: relative;
    bottom: 0px;
  }
`;
