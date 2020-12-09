import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ContentExporters from "./ContentExporters";
import ContentMenu from "./ContentMenu";
import APIInputModal from "../Modal/APIInputModal";
import { loadMoreData } from "../../store/actions/exporterActions";

const Contetnt = () => {
  const { filteredExporters, exposedExporters, totalCount } = useSelector(
    state => state.exporterReducer
  );
  const tokenState = useSelector(state => state.tokenReducer);
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
    <Section>
      <ContentMenu totalCount={totalCount} />
      <ContentExporters exporters={exposedExporters} />
      {tokenState && <APIInputModal />}
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
