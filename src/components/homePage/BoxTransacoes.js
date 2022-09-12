import styled from "styled-components";
import { deleteTransacao } from "../../services/services.js";
import Transacao from "./Transacao.js";

export default function BoxTransacoes({
  transacoes,
  handleClick,
  reload,
  setReload,
}) {
  const sum = transacoes.reduce((previousValue, currentValue) => {
    const numb = currentValue.amount.replace(",", ".");
    if (currentValue.tipo === "entrada") {
      return previousValue + Number(numb);
    } else {
      return previousValue - Number(numb);
    }
  }, 0);

  function deleteConfirm(id) {
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      deleteTransacao(id)
        .then(() => {
          setReload(!reload);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      {transacoes.length > 0 ? (
        <TableWrapper table={true}>
          <table>
            <tbody>
              {transacoes.map((Transacao) => (
                <Transacao
                  key={Transacao._id}
                  {...Transacao}
                  deleteConfirm={deleteConfirm}
                  handleClick={handleClick}
                />
              ))}
            </tbody>
          </table>
          <Saldo isPositive={sum >= 0}>
            <p>SALDO</p>
            <span>{sum.toFixed(2).replace(".", ",")}</span>
          </Saldo>
        </TableWrapper>
      ) : (
        <TableWrapper table={false}>
          <span>
            Não há registros de
            <br />
            entrada ou saída
          </span>
        </TableWrapper>
      )}
    </>
  );
}

const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  height: calc(100vh - (25px + 16px + 30px + 25px + 13px + 114px));
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.table ? "space-between" : "center")};
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 10px 22px;
  }
  span {
    color: #868686;
    font-size: 20px;
    text-align: center;
  }
`;

const Saldo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  width: 100%;
  padding: 10px;
  p {
    color: #000000;
    font-weight: 700;
  }
  span {
    color: ${(props) => (props.isPositive ? "#03AC00" : "#C70000")};
  }
`;
