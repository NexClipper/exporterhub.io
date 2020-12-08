import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from "./components/Header/Header";
import ExporterHubPage from "./pages/ExporterHubPage";
import ExporterHubDetailPage from "./pages/ExporterHubDetailPage";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { loadData, loadCategoriesData } from "./store/actions/exporterActions";
import AdminPage from "./pages/AdminPage";
import { CATEGORIES_API, EXPORTERS_API } from "./config";

function Routes() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        // "/data/exporter_list.json"
        EXPORTERS_API
      );
      const categoriesData = await axios(
        "/data/categories.json"
        // CATEGORIES_API
      );

      dispatch(loadData(result.data.exporters));
      dispatch(loadCategoriesData(categoriesData.data.categories));
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
          <Route exact path="/detail/:id" component={ExporterHubDetailPage} />
          <Route exact path="/detail" component={ExporterHubDetailPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
