import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { initializeIcons } from "@uifabric/icons";
import { ToastProvider } from "./providers/ToastsProvider";
// import { Provider } from "react-redux";
// import { configureStore } from "./config/store";
import { StoreProvider } from "./providers/StoreProvider";
initializeIcons();
// const store = configureStore();

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
