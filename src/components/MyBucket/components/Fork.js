import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadMoreData } from "../../../store/actions/exporterActions";
import ContentExporters from "../../Content/ContentExporters";

const Fork = () => {
  const { filteredExporters, exposedExporters, totalCount } = useSelector(
    (store) => store.exporterReducer
  );
  const tokenState = useSelector((store) => store.tokenReducer);
  const dispatch = useDispatch();
  const [scrollAct, setScrollAct] = useState(false);

  const infiniteScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight * 0.95 && !scrollAct) {
      setScrollAct(true);
      dispatch(loadMoreData(filteredExporters));
      setScrollAct(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, []);

  return (
    <Container>
      {/* <ReadmeTitle>Fork</ReadmeTitle> */}
      <ContentExporters exporters={exposedExporters} fork={true} />
    </Container>
  );
};

export default Fork;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

const ReadmeTitle = styled.h4`
  margin-bottom: 45px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
`;
