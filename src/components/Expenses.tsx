import React from "react";
import "../App.css";
import { GLobalContext } from "../context/GlobalState";
export const Expenses = () => {
  const { transations } = React.useContext(GLobalContext);
  const amount: number[] = transations.map((transations) => transations.amount);
  const income: number = Number(
    amount
      .filter((income) => income > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)
  );

  const expense: number = Number(
    amount
      .filter((expense) => expense < 0)
      .reduce((acc, item) => (acc += item * -1), 0)
      .toFixed(2)
  );
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus"> {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus"> {expense}</p>
      </div>
    </div>
  );
};
