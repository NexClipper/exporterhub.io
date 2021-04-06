import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import { PUBLIC_SERVICE, API_SURVER } from "../../config";
import { API_SURVER, CLIENT_ID } from "../../config";
import { GithubOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginState,
  changeBucketPage,
  filterByUser,
  changeDarkTheme,
} from "../../store/actions/exporterActions";
import Toggle from "react-toggle";
import "./toggle.css";

require("dotenv").config();
const HeaderMenu = () => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const [theme, setTheme] = useState(false);
  const isLogin = useSelector((store) => store.loginReducer);
  const isAdmin = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();
  const clientID = CLIENT_ID;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${API_SURVER}/callback&scope=user,repo,delete_repo,admin:org`;
  const {
    push,
    // location: { pathname },
  } = useHistory();
  // console.log(PUBLIC_SERVICE);
  console.log("ㅋㅋ >> ", changeTheme);
  const handleSignOut = () => {
    dispatch(getLoginState(false));
    dispatch(filterByUser(""));
    sessionStorage.removeItem("access_token");
    push("/");
    window.location.reload();
  };
  const handleBucketPage = (e) => {
    const page = e.target.innerHTML;
    if (page === "ADMIN") {
      dispatch(changeBucketPage(1));
      push("/mybucket");
    } else if (page === "MY BUCKET") {
      dispatch(changeBucketPage(0));
      push("/mybucket");
    }
  };
  const handleDarkTheme = () => {
    if (changeTheme) {
      localStorage.setItem("theme", "light");
      dispatch(changeDarkTheme(false));
    } else {
      localStorage.setItem("theme", "dark");
      dispatch(changeDarkTheme(true));
    }
  };
  return (
    <Div>
      <label>
        <Toggle
          defaultChecked={changeTheme}
          // icons={{
          //   checked: "🌜",
          //   unchecked: "🌞",
          // }}
          icons={{
            checked: "",
            unchecked: "",
          }}
          onChange={() => handleDarkTheme()}
          checked={changeTheme}
        />
      </label>
      {isLogin ? (
        <>
          {isAdmin && (
            <Button onClick={(e) => handleBucketPage(e)}>ADMIN</Button>
          )}
          <Button onClick={(e) => handleBucketPage(e)}>MY BUCKET</Button>
          <Button onClick={() => handleSignOut()}>SIGN OUT</Button>
        </>
      ) : (
        <Button>
          <a href={url}>SIGN IN</a>
        </Button>
      )}
      <GitHubLink
        href="https://github.com/NexClipper/exporterhub.io"
        target="_blank"
      >
        <GithubOutlined />
      </GitHubLink>
      {/* {PUBLIC_SERVICE === "n" && (
        <span
          onClick={() => {
            push("/admin");
            window.location.reload();
          }}
        >
          Admin
        </span>
      )} */}
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
  img {
    width: 38px;
    cursor: pointer;
  }
  span {
    margin-left: 30px;
    cursor: pointer;
  }
`;
const Button = styled.button`
  color: #73c7aa;
  font-weight: 600;
  font-size: 14px;
  margin-left: 30px;
  a {
    color: inherit;
  }
`;
const GitHubLink = styled.a`
  font-size: 35px;
  color: #cccccc;
`;
export default HeaderMenu;
