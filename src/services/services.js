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
  const promise = axios.post(`${BASE_URL}/transactions`, body, config);
  return promise;
}

function getTransacao() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/transactions`, config);
  return promise;
}

function deleteTransacao(transactionId) {
  const config = createHeaders();
  const promise = axios.delete(
    `${BASE_URL}/transactions/${transactionId}`,
    config
  );
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
