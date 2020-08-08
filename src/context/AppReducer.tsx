import { addTransation } from "../types/transtype";
type Actions =
  | { type: "DELETE_TRANSATION"; payload: number }
  | { type: "ADD_TRANSATION"; payload: addTransation };

interface Action {
  type: Actions;
}
export default (state: { transations: addTransation[] }, action: Actions) => {
  switch (action.type) {
    case "DELETE_TRANSATION":
      return {
        ...state,
        transations: state.transations.filter(
          (transation: addTransation) => transation.id !== action.payload
        ),
      };
    case "ADD_TRANSATION":
      return {
        ...state,
        transations: [action.payload, ...state.transations],
      };
    default:
      return state;
  }
};
