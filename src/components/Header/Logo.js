import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Div>
      <img
        src="https://exporterhub.io/assets/img/exporterhub_logo.png"
        alt="exporterhub logo"
      />
      <p>What is Exporterhub?</p>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 150px;
    object-fit: contain;
    margin-right: 20px;
  }
  p {
    font-size: 16px;
    color: navy;
  }
`;
export default Logo;
