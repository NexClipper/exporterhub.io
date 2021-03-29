import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getLoginState } from "../../store/actions/exporterActions";
import { LOGIN_API } from "../../config";

const Login = ({ history }) => {
  const clientID = "e0766f48a0ed436d36d4";
  const clientSecret = "aaffe151d27e8adefdebac55afc88d74dfac5590";
  const callBackUrl = window.location.href;
  const code = callBackUrl.substring(callBackUrl.indexOf("=") + 1);
  const dispatch = useDispatch();

  const getAccessToken = () => {
    axios({
      method: "POST",
      url: "/api/login/oauth/access_token",
      data: {
        client_id: clientID,
        client_secret: clientSecret,
        code,
      },
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log("before setToken >>>", res.data["access_token"]);
        setAccessToken(res.data["access_token"]);
        console.log("after setToken ^^");
      })
      .catch((err) => console.log(err));
  };
  const setAccessToken = (token) => {
    axios({
      method: "POST",
      url: `${LOGIN_API}`,
      data: {
        token: token,
      },
    })
      .then((res) => {
        sessionStorage.setItem("access_token", res.data.access_token);
        dispatch(getLoginState(true));
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  getAccessToken();

  return <div></div>;
};

export default Login;
