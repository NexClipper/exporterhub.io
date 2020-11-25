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
  display: flex;
  width: 1170px;
  margin: 0 auto;
`;
export default ExporterHubPAge;
