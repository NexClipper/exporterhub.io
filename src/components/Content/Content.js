import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import ContentExporters from "./ContentExporters";
import ContentMenu from "./ContentMenu";

const Contetnt = () => {
  const { exposedExporters, totalCount } = useSelector(
    state => state.exporterReducer
  );

  return (
    <Section>
      <ContentMenu totalCount={totalCount} />
      <ContentExporters exporters={exposedExporters} />
    </Section>
  );
};
const Section = styled.section`
  width: ${({ theme }) => theme.width.content}px;
  @media ${({ theme }) => theme.media.mobile} {
    width: ${({ theme }) => theme.width.contentOnM}%;
    margin: 0 auto;
  }
`;
export default Contetnt;
