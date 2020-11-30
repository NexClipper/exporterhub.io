import React from "react";
import Logo from "./Logo";
import ConnectList from "./ConnectList";
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <Logo />
      <ConnectList />
    </Div>
  );
};
const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 100px 30px 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
export default Footer;
