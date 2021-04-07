import React from "react";
import styled from "styled-components";
import Content from "../components/Content/Content";
import Nav from "../components/Nav/Nav";
import Sider from "../components/Sider/Sider";
import { useDispatch, useSelector } from "react-redux";
import { CLIENT_ID, CLIENT_SECRETS } from "../config";
const ExporterHubPage = () => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  return (
    <Main dark={changeTheme}>
      <Nav />
      <Container>
        <Sider />
        <Content />
      </Container>
    </Main>
  );
};
const Main = styled.main`
  background-color: ${(props) => (props.dark ? "#18191a" : "#fafafa")};
  width: 100%;
  padding-bottom: 30px;
`;
const Container = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;
export default ExporterHubPage;
