import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from "./components/Header/Header";
import ExporterHubPage from "./pages/ExporterHubPage";
import ReadmePage from "./pages/ReadmePage";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { loadData } from "./store/actions/exporterActions";
import AdminPage from "./pages/AdminPage";

function Routes() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "/data/exporter_list.json"
        // "http://10.153.1.241:8000"
      );
      dispatch(loadData(result.data.exporters));
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ExporterHubPage} />
          <Route exact path="/detail/:id" component={ReadmePage} />
          <Route exact path="/detail" component={ReadmePage} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
