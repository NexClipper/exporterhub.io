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
  filterByUser,
} from "./store/actions/exporterActions";
import AdminPage from "./pages/AdminPage";
import {
  CATEGORIES_API,
  EXPORTERS_API,
  TOKEN_API,
  PUBLIC_SERVICE,
  LOGIN_API,
} from "./config";

import Login from "./components/Login/Login";
import MyBucketPage from "./pages/MyBucketPage";

function Routes() {
  const token = sessionStorage.getItem("access_token");
  const dispatch = useDispatch();
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
    const userType = () => {
      axios({
        method: "POST",
        url: `${LOGIN_API}`,
        data: {
          token: token,
        },
      })
        .then((res) => {
          console.log("통신성공 가져온값은? >> ", res.data.type);
          const userType = res.data.type;
          if (userType === "admin") {
            dispatch(filterByUser("admin"));
          } else if (userType === "user") {
            dispatch(filterByUser("user"));
          } else {
            return;
          }
        })
        .catch((err) => console.log("라우트통신실패", err));
    };
    fetchData();
    userType();
  }, []);

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
