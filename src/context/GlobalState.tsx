import React from "react";
import AppReducer from "./AppReducer";
import { addTransation } from "../types/transtype";
interface Transaction {
  transations: addTransation[];
  deleteTransation: (id: number) => void;
  addTransation: (transations: addTransation) => void;
}

const initialState: Transaction = {
  transations: [],
  deleteTransation: () => null,
  addTransation: () => null,
};
export const GLobalContext = React.createContext(initialState);
export const GLobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  function deleteTransation(id: number) {
    dispatch({
      type: "DELETE_TRANSATION",
      payload: id,
    });
  }
  function addTransation(transations: addTransation) {
    dispatch({
      type: "ADD_TRANSATION",
      payload: transations,
    });
  }
  return (
    <GLobalContext.Provider
      value={{
        transations: state.transations,
        deleteTransation,
        addTransation,
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};
