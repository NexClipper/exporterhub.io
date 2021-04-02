import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from "./components/Header/Header";
import ExporterHubPage from "./pages/ExporterHubPage";
import ExporterHubDetailPage from "./pages/ExporterHubDetailPage";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import {
  loadData,
  loadCategoriesData,
  getTokenState,
  getAdminState,
  allData,
} from "./store/actions/exporterActions";
import AdminPage from "./pages/AdminPage";
import {
  CATEGORIES_API,
  EXPORTERS_API,
  TOKEN_API,
  PUBLIC_SERVICE,
  SERVER,
} from "./config";

import Login from "./components/Login/Login";
import MyBucketPage from "./pages/MyBucketPage";

function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchData = async () => {
    //   const exportersData = await axios(EXPORTERS_API);
    //   console.log("너누구야 ?>", exportersData);
    //   const categoriesData = await axios(CATEGORIES_API);
    //   dispatch(loadData(exportersData.data.exporters));
    //   dispatch(loadCategoriesData(categoriesData.data.categories));

    // fetchData();
    fetchCategoriesData();
    getToken();
    userAdminState();
    handleLocalStorage();
  }, []);

  const fetchData = () => {
    axios({
      method: "GET",
      url: `${EXPORTERS_API}`,
    })
      .then((res) => {
        dispatch(allData(res.data.exporters));
        console.log("Routes exporter data", res.data.exporters);
      })
      .catch((err) => console.log("에러임", err));
  };

  const getToken = () => {
    axios(TOKEN_API)
      .then((res) => {
        dispatch(getTokenState(res.data.TOKEN_VALID));
      })
      .catch(() => {
        dispatch(getTokenState(false));
      });
  };

  const fetchCategoriesData = () => {
    axios({
      method: "GET",
      url: `${CATEGORIES_API}`,
    })
      .then((res) => {
        dispatch(loadCategoriesData(res.data.categories));
      })
      .catch((err) => console.log("에러임", err));
  };

  const userAdminState = () => {
    if (sessionStorage.getItem("access_token")) {
      axios({
        method: "GET",
        url: `${SERVER}/user/check`,
        headers: {
          Authorization: sessionStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          dispatch(getAdminState(res.data.is_admin));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLocalStorage = () => {
    if (window.location.pathname === "/") {
      localStorage.setItem("activeTab", "0");
    } else {
      return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ExporterHubPage} />
          <Route exact path="/callback" component={Login} />
          <Route exact path="/detail/:id" component={ExporterHubDetailPage} />
          <Route exact path="/detail" component={ExporterHubDetailPage} />
          <Route exact path="/mybucket" component={MyBucketPage} />
          {PUBLIC_SERVICE === "n" && (
            <Route exact path="/admin" component={AdminPage} />
          )}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
