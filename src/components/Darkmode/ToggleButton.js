import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeDarkTheme } from "../../store/actions/exporterActions";

// import Toggle from "react-toggle";

import styled from "styled-components";
import "./toggle.css";

const ToggleButton = () => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const dispatch = useDispatch();
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
    <Container>
      <Button dark={changeTheme} onClick={() => handleDarkTheme()}>
        <span>{(changeTheme && "Light Mode 🌞") || "Dark Mode 🌜"}</span>
      </Button>
    </Container>
  );
};
const Container = styled.div``;

const Button = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 7%;
  right: 3%;
  height: 45px;
  padding: 0px 1.2rem;
  background-color: ${(props) => (props.dark && "black") || "white"};
  box-shadow: 10px 16px 10px -14px ${(props) => (props.dark && "#333333") || "#d3d3d3"};
  border-radius: 10em;
  border: none;

  span {
    color: ${(props) => (props.dark && "white") || "black"};
  }

  &:hover {
    background-color: ${(props) => (props.dark && "white") || "black"};
    span {
      color: ${(props) => (props.dark && "black") || "white"};
    }
  }
`;
export default ToggleButton;
