import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

function postCadastro(body) {
  const promise = axios.post(`${BASE_URL}/cadastro`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

function deleteLogin() {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/login`, config);
  return promise;
}

function postTransacao(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/transacoes`, body, config);
  return promise;
}

function getTransacao() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/transacoes`, config);
  return promise;
}

function deleteTransacao(transacaoId) {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/transacoes/${transacaoId}`, config);
  return promise;
}

export {
  postCadastro,
  postLogin,
  deleteLogin,
  postTransacao,
  getTransacao,
  deleteTransacao,
};
