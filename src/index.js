import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import store from "./configureStore.js";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
