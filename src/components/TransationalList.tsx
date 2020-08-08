import React from "react";
import { GLobalContext } from "../context/GlobalState";
import { Transation } from "./Transation";
import { addTransation } from "../types/transtype";
export const TransationalList = () => {
  const { transations } = React.useContext(GLobalContext);
  return (
    <div>
      <h3> history</h3>
      <div
        style={{
          backgroundColor: "lightblue",
          width: "190",
          height: " 70px",
          borderRadius: "10px",
          padding: "5px",
          overflow: " scroll",
        }}
      >
        <ul style={{ lineHeight: "0px", cursor: "pointer", color: "black" }}>
          {transations.map((transation: addTransation) => (
            <Transation key={transation.id} transation={transation} />
          ))}
        </ul>
      </div>
    </div>
  );
};
