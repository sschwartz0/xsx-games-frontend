import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { initializeIcons } from "@uifabric/icons";
import { ToastProvider } from "./providers/ToastsProvider";
initializeIcons();

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
