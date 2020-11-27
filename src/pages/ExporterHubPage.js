import React from "react";
import styled from "styled-components";
import Content from "../components/Content/Content";
import Sider from "../components/Sider/Sider";

const ExporterHubPAge = () => {
  return (
    <Main>
      <Conainer>
        <Sider />
        <Content />
      </Conainer>
    </Main>
  );
};

const Main = styled.main`
  background-color: #fafafa;
`;

const Conainer = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
`;

export default ExporterHubPAge;
