import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const { push } = useHistory();
  return (
    <Div
      onClick={() => {
        push("/");
        window.location.reload();
      }}
    ></Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background: url(/assets/small_logo_fr.png) no-repeat center;
`;
export default Logo;
