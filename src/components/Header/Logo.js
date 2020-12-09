import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const { push } = useHistory();
  return (
    <Div>
      <img
        onClick={() => {
          push("/");
          window.location.reload();
        }}
        src="assets/small_logo_fr.png"
        alt="exporterhub logo"
      />
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 150px;
    object-fit: contain;
  }
`;
export default Logo;
