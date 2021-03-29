import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CardExporter from "./CardExporter";
import EditModal from "../Modal/EditModal";

const ContentExporters = ({ exporters, fork }) => {
  const {
    push,
    location: { pathname },
  } = useHistory();
  const [isModalActive, setIsModalActive] = useState(false);
  const [exporterId, setExporterId] = useState();

  const goToDetail = (id) => {
    push(`/detail/${id}`);
  };
  const modalClick = (id) => {
    setIsModalActive(true);
    setExporterId(id);
  };
  const cancleModal = () => {
    setIsModalActive(false);
  };

  return (
    <ExporterContainer fork={fork}>
      {exporters &&
        exporters.map((exporter) => (
          <CardExporter
            key={exporter.exporter_id}
            exporter={exporter}
            // cardClick={pathname === "/" ? goToDetail : modalClick}
            cardClick={pathname === "/" ? goToDetail : goToDetail}
            fork={fork}
          />
        ))}
      {isModalActive && (
        <EditModal exporterId={exporterId} cancleModal={cancleModal} />
      )}
    </ExporterContainer>
  );
};

const ExporterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({ theme }) => (theme.width.content - theme.width.card) * 1.5}px;
  width: ${(props) => props.fork && "100%"};

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }
`;
export default ContentExporters;
