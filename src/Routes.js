import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from "./components/Header/Header";
import ExporterHubPage from "./pages/ExporterHubPage";
import ReadmePage from "./pages/ReadmePage";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/common";
import { loadData } from "./store/actions/exporterActions";

function Routes() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:3000/data/exporter_list.json"
        // "http://10.153.7.84:8000/"
      );
      dispatch(loadData(result.data.exporters));
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ExporterHubPage} />
          <Route exact path="/detail" component={ReadmePage} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default Routes;
