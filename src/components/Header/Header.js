import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import HeaderMenu from "./HeaderMenu";
import AdminMenu from "./AdminMenu";
import styled from "styled-components";
import { PUBLIC_SERVICE } from "../../config";
import { GithubOutlined } from "@ant-design/icons";

const Header = () => {
  const {
    push,
    location: { pathname },
  } = useHistory();

  return (
    <HeaderBox>
      <Div>
        <div className="logoInfo">
          <Logo />
          {pathname !== "/admin" && (
            <Admin>
              <a
                style={{ color: "black", fontSize: "35px" }}
                href="https://github.com/NexClipper/exporterhub.io"
                target="_blank"
              >
                <GithubOutlined />
              </a>
            </Admin>
          )}
        </div>
        <Search />

        {/* {pathname === "/" && <HeaderMenu />} */}
        {(PUBLIC_SERVICE === "n") & (pathname === "/admin") ? (
          <AdminMenu />
        ) : (
          <HeaderMenu />
        )}
      </Div>
    </HeaderBox>
  );
};
const HeaderBox = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    height: auto;
  }
`;
const Div = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
  .logoInfo {
    display: flex;
    align-items: center;
    @media ${({ theme }) => theme.media.mobile} {
      justify-content: space-between;
    }
  }
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    justify-content: space-between;
  }
`;

const Admin = styled.button`
  display: none;
  margin-left: 30px;
  font-weight: 600;
  color: tomato;

  img {
    width: 40px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`;

export default Header;
