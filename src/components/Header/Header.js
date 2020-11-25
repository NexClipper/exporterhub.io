import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import styled from "styled-components";

const Header = () => {
  return (
    <Div>
      <Logo />
      <Search />
    </Div>
  );
};
const Div = styled.div`
  margin: 20px 40px;
  display: flex;
  justify-content: space-between;
`;

export default Header;
