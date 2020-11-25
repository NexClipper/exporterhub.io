import React from "react";
import styled from "styled-components";
import ContentExporters from "./ContentExporters";
import ContentMenu from "./ContentMenu";

const Contetnt = () => {
  return (
    <Section>
      <ContentMenu />
      <ContentExporters />
    </Section>
  );
};
const Section = styled.section``;
export default Contetnt;
