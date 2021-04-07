import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PUBLIC_SERVICE, SERVICE_URL } from "../../config";
import { API_SURVER, CLIENT_ID } from "../../config";
import { GithubOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { GiHamburgerMenu } from "react-icons/gi";

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
  const [isMenu, setIsMenu] = useState(false);
  const isLogin = useSelector((store) => store.loginReducer);
  const isAdmin = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();
  const clientID = CLIENT_ID;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${SERVICE_URL}/callback&scope=user,repo,delete_repo,admin:org`;
  const {
    push,
    // location: { pathname },
  } = useHistory();
  // console.log(PUBLIC_SERVICE);

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

  const handleMenu = () => {
    setIsMenu(!isMenu);
    console.log(isMenu);
  };

  return (
    <Div>
      <ModeChanger>
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
      </ModeChanger>
      <MobileMenu onClick={() => handleMenu()} active={isMenu}>
        <GiHamburgerMenu />
      </MobileMenu>
      <MenuWrapper active={isMenu} dark={changeTheme}>
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
      </MenuWrapper>
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

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media.mobile} {
    display: ${(props) => (props.active ? "flex" : "none")};
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    height: 50px;
    right: 0;
    top: 80px;
    background-color: ${(props) => (props.dark ? "#242526" : "#ffffff")};
    margin-right: 10px;
  }
`;

const ModeChanger = styled.label`
  @media ${({ theme }) => theme.media.mobile} {
    position: absolute;
    top: 27px;
    right: 70px;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    color: #73c7aa;
    font-size: 30px;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => props.active && "rotate(90deg)"};
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  @media ${({ theme }) => theme.media.mobile} {
    /* display: none; */
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

  @media ${({ theme }) => theme.media.mobile} {
    margin: 0 15px;
  }
`;
const GitHubLink = styled.a`
  font-size: 35px;
  color: #cccccc;

  @media ${({ theme }) => theme.media.mobile} {
    position: relative;
    right: 15px;
  }
`;
export default HeaderMenu;
