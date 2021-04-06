import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ContentExporters from "./ContentExporters";
import ContentMenu from "./ContentMenu";
import TokenModal from "../Modal/TokenModal";
import axios from "axios";
import { allData } from "../../store/actions/exporterActions";
import { EXPORTERS_API } from "../../config";
import CookieConsent from "react-cookie-consent";

const Contetnt = () => {
  const exportersAllData = useSelector((store) => store.allExporterReducer);
  const searchFilter = useSelector((store) => store.searchFilterReducer);
  const navFilter = useSelector((store) => store.navFilterReducer);
  const cateFilter = useSelector((store) => store.cateFilterReducer);
  const sortFilter = useSelector((store) => store.sortFilterReducer);

  const tokenState = useSelector((store) => store.tokenReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    mainFilter();
  }, [navFilter, cateFilter, sortFilter, searchFilter]);

  const mainFilter = () => {
    axios({
      method: "GET",
      url: `${EXPORTERS_API}`,
      params: { type: navFilter, category: cateFilter, sort: sortFilter },
    })
      .then((res) => {
        let resultExporters = res.data.exporters.filter((exporter) => {
          return exporter.name.toLowerCase().includes(searchFilter);
        });
        dispatch(allData(resultExporters));
      })
      .catch((err) => console.log("navFilter error", err));
  };

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
      <ContentMenu />
      <ContentExporters exporters={exportersAllData} />
      {!tokenState && <TokenModal />}
    </Section>
  );
};
const Section = styled.section`
  width: ${({ theme }) => theme.width.content}px;

  @media ${({ theme }) => theme.media.mobile} {
    /* width: ${({ theme }) => theme.width.contentOnM}%; */
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default Contetnt;
