import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serWorker";
// import firebase from "./push-notification";
ReactDOM.render(<App />, document.getElementById("root"));
// firebase();
serviceWorker.register();
