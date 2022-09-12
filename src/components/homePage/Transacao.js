import styled from "styled-components";
import dayjs from "dayjs";

export default function Transacao({
  _id,
  data,
  descricao,
  valor,
  tipo,
  deleteConfirm,
  handleClick,
}) {
  const text = tipo === "entrada" ? "entrada" : "saída";
  const formatedData = dayjs(data).format("DD/MM");

  return (
    <tr>
      <Data>{formatedData}</Data>
      <Descricao onClick={() => handleClick("edit", text, _id)}>
        {descricao}
      </Descricao>
      <Valor tipo={tipo}>{valor.replace(".", ",")}</Valor>
      <Delete onClick={() => deleteConfirm(_id)}>x</Delete>
    </tr>
  );
}

const Data = styled.td`
  color: #c6c6c6;
`;

const Descricao = styled.td`
  color: #000000;
  text-align: justify;
`;

const Valor = styled.td`
  color: ${(props) => (props.tipo === "entrada" ? "#03AC00" : "#C70000")};
  text-align: end;
`;

const Delete = styled.td`
  color: #c6c6c6;
  text-align: end;
`;
