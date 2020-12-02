import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Div>
      <img
        src="https://exporterhub.io/assets/img/exporterhub_logo.png"
        alt="exporterhub logo"
      />
    </Div>
  );
};
const Div = styled.div`
  width: 300px;
  img {
    width: 150px;
    margin-bottom: 20px;
  }
`;
export default Logo;
