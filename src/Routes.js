import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  // browserHistory,
} from "react-router-dom";
// import { useHistory, browserHistory } from "react-router";
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
} from "./store/actions/exporterActions";
import AdminPage from "./pages/AdminPage";
import {
  CATEGORIES_API,
  EXPORTERS_API,
  TOKEN_API,
  PUBLIC_SERVICE,
  SERVER,
  API_SURVER,
} from "./config";

import Login from "./components/Login/Login";
import MyBucketPage from "./pages/MyBucketPage";

function Routes() {
  const token = sessionStorage.getItem("access_token");
  const dispatch = useDispatch();
  const historyf = useHistory();
  // const location = useLocation();
  // const currentURL = browserHistory.getCurrentLocation();

  useEffect(() => {
    const fetchData = async () => {
      const exportersData = await axios(EXPORTERS_API);
      const categoriesData = await axios(CATEGORIES_API);
      dispatch(loadData(exportersData.data.exporters));
      dispatch(loadCategoriesData(categoriesData.data.categories));
      axios(TOKEN_API)
        .then((res) => {
          dispatch(getTokenState(res.data.TOKEN_VALID));
        })
        .catch(() => {
          dispatch(getTokenState(false));
        });
    };
    fetchData();
    userAdminState();
    handleLocalStorage();
  }, []);

  const userAdminState = () => {
    if (sessionStorage.getItem("access_token")) {
      axios({
        method: "GET",
        url: `${API_SURVER}:8000/user/check`,
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
          {/* {PUBLIC_SERVICE === "n" && (
            <Route exact path="/admin" component={AdminPage} />
          )} */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
