import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import appStore from "./state/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("initial state",appStore.getState())
// appStore.dispatch()
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
