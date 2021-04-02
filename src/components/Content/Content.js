import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ContentExporters from "./ContentExporters";
import ContentMenu from "./ContentMenu";
import TokenModal from "../Modal/TokenModal";
import axios from "axios";
import {
  loadMoreData,
  allData,
  moreData,
} from "../../store/actions/exporterActions";
import { EXPORTERS_API } from "../../config";
import CookieConsent from "react-cookie-consent";

const Contetnt = () => {
  const exportersAllData = useSelector((store) => store.allExporterReducer);
  const exportersMoreData = useSelector((store) => store.moreExpoterReducer);
  const searchFilter = useSelector((store) => store.searchFilterReducer);
  const navFilter = useSelector((store) => store.navFilterReducer);
  const cateFilter = useSelector((store) => store.cateFilterReducer);
  const sortFilter = useSelector((store) => store.sortFilterReducer);

  const tokenState = useSelector((store) => store.tokenReducer);
  const dispatch = useDispatch();
  const [exportersArr, setExportersArr] = useState([]);
  const [scrollAct, setScrollAct] = useState(false);
  const [preExporters, setPreExporters] = useState(0);
  const [endExporters, setEndExporters] = useState(9);
  // console.log("exportersArr에 뭐담겨 ?", exportersArr);
  // console.log("nav > ", navFilter);
  // console.log("cate > ", cateFilter);
  // console.log("sort > ", sortFilter);
  // console.log("search text >", searchFilter);

  useEffect(() => {
    mainFilter();
  }, [
    navFilter,
    cateFilter,
    sortFilter,
    preExporters,
    endExporters,
    searchFilter,
  ]);

  useEffect(() => {
    moreData();
  }, [exportersMoreData]);

  const mainFilter = () => {
    axios({
      method: "GET",
      url: `${EXPORTERS_API}`,
      params: { type: navFilter, category: cateFilter, sort: sortFilter },
    })
      .then((res) => {
        // if (searchFilter) {
        let resultExporters = res.data.exporters.filter((exporter) => {
          return exporter.name.toLowerCase().includes(searchFilter);
        });
        let realResult = resultExporters.slice(preExporters, endExporters);
        dispatch(allData([...realResult]));
        // } else {
        //   let realResult = res.data.exporters.slice(preExporters, endExporters);
        //   console.log("어떻게 잘림 > ", realResult);
        //   // dispatch(allData([...exportersAllData, ...realResult]));
        //   dispatch(allData([...realResult]));
        //   dispatch(moreData([]));
        // }
        // let resultExporters = res.data.exporters.filter((exporter) => {
        //   return exporter.name.toLowerCase().includes(searchFilter);
        // });
        // let realResult = resultExporters.slice(preExporters, endExporters);
        // console.log("어떻게 잘림 > ", realResult);
        // dispatch(allData([...exportersAllData, ...realResult]));
      })
      // .then((res) => {
      //   console.log("밑에실행");
      // dispatch(allData([...exportersAllData, ]))
      // })
      .catch((err) => console.log("navFilter error", err));
    window.addEventListener("scroll", infiniteScroll, true);
  };

  // const moreData = () => {
  //   axios({
  //     method: "GET",
  //     url: `${EXPORTERS_API}`,
  //     params: { type: navFilter, category: cateFilter, sort: sortFilter },
  //   }).then((res) => {
  //     dispatch(moreData([...exportersAllData, ...realResult]));
  //   });
  // };

  const infiniteScroll = () => {
    const { documentElement, body } = document;
    let scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    let scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    let clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      // setScrollAct(true);
      setPreExporters(endExporters);
      setEndExporters(endExporters + 9);
      // setScrollAct(false);
      console.log("시작숫자", preExporters);
      console.log("종료숫자", endExporters);
    }
  };

  // const testgood = () => {
  //   window.addEventListener("scroll", infiniteScroll, true);
  // };

  // const infiniteScroll = () => {
  //   const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  //   // if (scrollTop + clientHeight >= scrollHeight * 0.95 && !scrollAct) {
  //   //   setScrollAct(true);
  //   //   dispatch(loadMoreData(filteredExporters));
  //   //   setScrollAct(false);
  //   // }
  //   if (scrollTop + clientHeight >= scrollHeight * 0.95) {
  //     setScrollAct(true);
  //     setPreExporters(endExporters);
  //     setEndExporters(endExporters + 9);
  //     console.log("처음값올름?", preExporters);
  //     console.log("엔드값올름?", endExporters);
  //     setScrollAct(false);
  //     // useEffect();
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", infiniteScroll);
  //   return () => window.removeEventListener("scroll", infiniteScroll);
  // }, []);

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
      {/* <ContentMenu totalCount={totalCount} /> */}
      <ContentMenu />
      <ContentExporters exporters={exportersAllData} />
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
