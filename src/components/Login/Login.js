import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  getAdminState,
  getLoginState,
} from "../../store/actions/exporterActions";
import { CLIENT_ID, CLIENT_SECRETS, LOGIN_API } from "../../config";
import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = ({ history }) => {
  const clientID = CLIENT_ID;
  const clientSecret = CLIENT_SECRETS;
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
        setAccessToken(res.data["access_token"]);
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
        sessionStorage.setItem("user_type", res.data.type);
        dispatch(getLoginState(true));
        dispatch(getAdminState(res.data.type === "admin"));
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  getAccessToken();

  return (
    <LoginPage>
      <Loading>
        <AiOutlineLoading3Quarters className="spinner" />
      </Loading>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  height: calc(100vh - 255px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  font-size: 13px;

  .spinner {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
