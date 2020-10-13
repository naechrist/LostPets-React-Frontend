import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux"; //set up our store
import thunk from "redux-thunk"; //for our async fetch requests
import { Provider } from "react-redux"; //everything wraped in provider will have access to our redux store

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
