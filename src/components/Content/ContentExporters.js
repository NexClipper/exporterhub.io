import { useState } from "react";
import styled from "styled-components";
import CardExporter from "./CardExporter";
import { useHistory } from "react-router-dom";
import RegisterModal from "../Modal/RegisterModal";
import EditModal from "../Modal/EditModal";

const ContentExporters = ({ exporters }) => {
  const {
    push,
    location: { pathname }
  } = useHistory();
  const [isModalActive, setIsModalActive] = useState(false);

  const goToDetail = id => {
    push(`/detail/${id}`);
  };
  const modalClick = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <ExporterContainer>
      {exporters &&
        exporters.map(exporter => (
          <CardExporter
            key={exporter.exporter_id}
            exporter={exporter}
            cardClick={pathname === "/" ? goToDetail : modalClick}
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
  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }
`;
export default ContentExporters;
