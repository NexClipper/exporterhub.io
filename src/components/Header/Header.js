import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import InfoIcon from "./InfoIcon";
import Search from "./Search";
import HeaderMenu from "./HeaderMenu";
import AdminMenu from "./AdminMenu";
import styled from "styled-components";

const Header = () => {
  const {
    location: { pathname }
  } = useHistory();

  return (
    <HeaderBox>
      <Div>
        <div className="logoInfo">
          <Logo />
          <InfoIcon />
        </div>
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
  .logoInfo {
    display: flex;
    align-items: center;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: ${({ theme }) => theme.width.contentOnM}%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export default Header;
