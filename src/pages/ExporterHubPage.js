import React from "react";
import styled from "styled-components";
import Content from "../components/Content/Content";
import Nav from "../components/Nav/Nav";
import Sider from "../components/Sider/Sider";

const ExporterHubPage = () => {
  return (
    <Main>
      <Nav />
      <Conainer>
        <Sider />
        <Content />
      </Conainer>
    </Main>
  );
};

const Main = styled.main`
  background-color: #fafafa;
  width: 100%;
`;

const Conainer = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

export default ExporterHubPage;
