import React from "react";
import styled from "styled-components";
import CardExporter from "./CardExporter";

const ContentExporters = ({ exporters }) => {
  return (
    <ExporterContainer>
      {exporters &&
        exporters.map(exporter => (
          <CardExporter key={exporter.exporter_id} exporter={exporter} />
        ))}
    </ExporterContainer>
  );
};

const ExporterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({ theme }) => (theme.width.content - theme.width.card) * 1.5}px;
  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }
`;
export default ContentExporters;
