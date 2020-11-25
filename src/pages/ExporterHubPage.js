import React from "react";
import styled from "styled-components";
import Content from "../components/Content/Content";
import Sider from "../components/Sider/Sider";

const ExporterHubPAge = () => {
  return (
    <Main>
      <Content />
      <Sider />
    </Main>
  );
};
const Main = styled.main`
  background-color: #fafafa;
`;
export default ExporterHubPAge;
