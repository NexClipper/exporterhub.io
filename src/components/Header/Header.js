import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";
import AdminMenu from "./AdminMenu";

const Header = () => {
  const {
    location: { pathname }
  } = useHistory();

  return (
    <HeaderBox>
      <Div>
        <Logo />
        <Search />
        {pathname === "/admin" ? <AdminMenu /> : <HeaderMenu />}
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
