import React from "react";
import styled from "styled-components";
import CardExporter from "./CardExporter";

const ContentExporters = ({ exporters }) => {
  return (
    <Section>
      <ExporterContainer>
        {exporters &&
          exporters.map(exporter => (
            <CardExporter key={exporter.exporter_id} exporter={exporter} />
          ))}
      </ExporterContainer>
    </Section>
  );
};
const Section = styled.section`
  width: 870px;
`;
const ExporterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px;
`;
export default ContentExporters;
