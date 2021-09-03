import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import ToggleButton from "./components/Darkmode/ToggleButton";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/common";

import ReactGA from "react-ga";
ReactGA.initialize("UA-122075277-6");
ReactGA.pageview(window.location.pathname + window.location.search);

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <ToggleButton />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
