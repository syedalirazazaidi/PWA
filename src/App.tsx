import React from "react";
import "./App.css";

import { Balance } from "./components/Balance";
import { TransationalList } from "./components/TransationalList";
import { AddTransation } from "./components/AddTransation";
import { GLobalProvider } from "./context/GlobalState";
import { Expenses } from "./components/Expenses";

function App() {
  return (
    <GLobalProvider>
      <div className="container">
        <h1>Expence Tracker App</h1>
        <h2 style={{ marginTop: "0px" }}>
          <Balance />
        </h2>
        <Expenses />

        <div className="tracker-app">
          <h4>
            <TransationalList />
          </h4>
          <hr />
          <AddTransation />
        </div>
      </div>
    </GLobalProvider>
  );
}

export default App;
