import React from "react";
import axios from "axios";

const Login = ({ history }) => {
  const clientID = "e0766f48a0ed436d36d4";
  const clientSecret = "aaffe151d27e8adefdebac55afc88d74dfac5590";
  const callBackUrl = window.location.href;
  const code = callBackUrl.substring(callBackUrl.indexOf("=") + 1);

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
        setAccessToken(res.data["access_token"]);
      })
      .catch((err) => console.log(err));
  };
  const setAccessToken = (token) => {
    axios({
      method: "POST",
      url: "http://10.8.0.220:8000/user/login",
      data: {
        token: token,
      },
    })
      .then((res) => {
        sessionStorage.setItem("access_token", res.data.access_token);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  getAccessToken();

  return <div></div>;
};

export default Login;
