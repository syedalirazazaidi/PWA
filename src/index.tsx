import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serWorker";
import { register } from "./serWorker";
import initializeFirebase from "./push-notification";
ReactDOM.render(<App />, document.getElementById("root"));
// firebase();
initializeFirebase();
register();
