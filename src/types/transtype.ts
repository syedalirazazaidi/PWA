import { type } from "os";

export type addTransation = {
  text: string;
  amount: number;
  id: number;
};

export type stateTransation = {
  transations: addTransation[];
};
