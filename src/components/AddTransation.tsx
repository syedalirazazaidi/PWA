import React from "react";
import { GLobalContext } from "../context/GlobalState";
export const AddTransation: React.FC = () => {
  const { addTransation } = React.useContext(GLobalContext);
  const [form, setForm] = React.useState({
    text: "",
    amount: 0,
  });
  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.text !== "" && form.amount) {
      addTransation({
        text: form.text,
        amount: Number(form.amount),
        id: Math.floor(Math.random() * 1000),
      });
      setForm({
        text: "",
        amount: 0,
      });
    }
  };

  return (
    <div>
      <p>Add new transaction</p>
      <form onSubmit={onSubmitHandler}>
        <ul>
          <li className="text">
            <input
              className="abc"
              type="text"
              value={form.text}
              placeholder="enter text..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleForm("text", e.target.value);
              }}
              required
            />
          </li>
          <li>
            <input
              className="abc"
              type="number"
              value={form.amount}
              placeholder="enter amount..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleForm("amount", e.target.value);
              }}
              required
            />
          </li>
          <li>
            <button name="plus" className="btn">
              Add Incomes
            </button>{" "}
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();

                const minTrans = {
                  text: form.text,
                  amount: -Number(form.amount),
                  id: Math.floor(Math.random() * 1000),
                };
                if (form.text !== "" && form.amount) {
                  addTransation(minTrans);
                  setForm({
                    text: "",
                    amount: 0,
                  });
                } else {
                  alert("plz fill the field");
                }
              }}
            >
              Add Expenses
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};
