import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import { GlobalStyle } from "./styles/GlobalStyle";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
