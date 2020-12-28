import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ContentExporters from "./ContentExporters";
import ContentMenu from "./ContentMenu";
import TokenModal from "../Modal/TokenModal";
import { loadMoreData } from "../../store/actions/exporterActions";
import CookieConsent from "react-cookie-consent";

const Contetnt = () => {
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
    <Section>
      <CookieConsent
        location="top"
        cookieName="myAwesomeCookieName3"
        expires={999}
        overlay
        style={{ background: "tomato" }}
        buttonStyle={{
          background: "white",
          color: "black",
          fontWeight: "bold",
          borderRadius: "2px",
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <ContentMenu totalCount={totalCount} />
      <ContentExporters exporters={exposedExporters} />
      {!tokenState && <TokenModal />}
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
