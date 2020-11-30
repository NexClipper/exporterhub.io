import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <Div>
        <Logo />
        <Search />
        <HeaderMenu />
      </Div>
    </HeaderBox>
  );
};
const HeaderBox = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;
const Div = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
  @media ${({ theme }) => theme.media.mobile} {
    width: ${({ theme }) => theme.width.contentOnM}%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export default Header;
