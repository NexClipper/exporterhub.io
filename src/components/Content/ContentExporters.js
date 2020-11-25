import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CardExporter from "./CardExporter";

const ContentExporters = () => {
  const { exporters } = useSelector(state => state.exporterReducer);
  return (
    <Section>
      {exporters &&
        exporters.map(exporter => <CardExporter exporter={exporter} />)}
    </Section>
  );
};
const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export default ContentExporters;
