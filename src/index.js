import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux"; // compose combines multiple middlewares into one so we can just pass in that one middleware in the store argument
import thunk from "redux-thunk"; //for our async fetch requests, returns a function from the action creator
import { Provider } from "react-redux"; //everything wraped in provider will have access to our redux store
import petTypeReducer from "./reducers/petTypeReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //to c on the web page inspect

const store = createStore(
  petTypeReducer,
  composeEnhancers(applyMiddleware(thunk))
);
//store is where you store your data globally, reducer tells us what we want to do w the store based on the actions
// reducer returns the new verison of the store
//anytime something is dispatched(action), the action obj will b send to the reducer which updated the value of the store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
