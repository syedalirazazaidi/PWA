import React, { useContext } from "react";
import { GLobalContext } from "../context/GlobalState";
interface Props {
  transation: {
    text: string;
    amount: number;
    id: number;
  };
}
export const Transation: React.FC<Props> = ({ transation }) => {
  const { deleteTransation } = useContext(GLobalContext);
  return (
    <ul
      className="dlt-btn"
      onClick={() => deleteTransation(transation.id)}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <li>{transation.text}</li>
      <li>Rs:{transation.amount}</li>{" "}
    </ul>
  );
};
