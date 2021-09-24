import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CardExporter from "./CardExporter";

const ContentExporters = ({
  exporters,
  fork,
  mybucket,
  setIsForkModalActive,
}) => {
  const {
    push,
    location: { pathname },
  } = useHistory();

  const goToDetail = (id) => {
    push(`/detail/${id}`);
  };

  return (
    <ExporterContainer fork={fork} mybucket={mybucket}>
      {exporters &&
        exporters.map((exporter) => (
          <CardExporter
            key={exporter.exporter_id}
            cardClick={pathname === "/" ? goToDetail : goToDetail}
            fork={fork}
            mybucket={mybucket}
            setIsForkModalActive={setIsForkModalActive}
          />
        ))}
    </ExporterContainer>
  );
};

const ExporterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({ theme }) => (theme.width.content - theme.width.card) * 1.5}px;
  width: ${(props) => props.mybucket && "100%"};

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }
`;
export default ContentExporters;
