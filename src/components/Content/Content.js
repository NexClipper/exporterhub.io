import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ContentExporters from "./ContentExporters";
import ContentMenu from "./ContentMenu";

const Contetnt = () => {
  const { exporters, totalCount } = useSelector(state => state.exporterReducer);

  return (
    <Section>
      <ContentMenu totalCount={totalCount} />
      <ContentExporters exporters={exporters} />
    </Section>
  );
};
const Section = styled.section``;
export default Contetnt;
