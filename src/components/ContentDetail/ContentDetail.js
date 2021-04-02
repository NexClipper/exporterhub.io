import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import useLocalStorage from "react-use-localstorage";
import axios from "axios";
import styled from "styled-components";
import Exporter from "./components/Exporter";
import Dashboard from "./components/Dashboard";
import Alert from "./components/Alert";
import { EXPORTER_API } from "../../config";
import OpenSourceInfo from "./components/OpenSourceInfo";

const TABMENU = [
  { id: 0, tabName: "Exporter" },
  { id: 1, tabName: "Dashboard" },
  { id: 2, tabName: "Alert" },
];

const ContentDetail = () => {
  const { id } = useParams();
  const historyf = useHistory();
  const [test, setTest] = useLocalStorage("activeTab", 0);
  const [exporterInfo, setExporterInfo] = useState([]);
  const [forkState, setForkState] = useState();
  const [starState, setStarState] = useState();
  const [starNumber, setStarNumber] = useState();

  const ACTIVECONTENT_OBJ = {
    0: <Exporter readmeContent={exporterInfo.readme} />,
    1: <Dashboard title={exporterInfo.title} />,
    2: <Alert title={exporterInfo.title} />,
  };

  const TOKEN = sessionStorage.getItem("access_token");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [forkState]);

  const fetchData = () => {
    const HEADER = TOKEN && { Authorization: TOKEN };

    axios({
      method: "GET",
      url: `${EXPORTER_API}/${id}`,
      headers: HEADER,
    })
      .then((res) => {
        setExporterInfo(res.data.data);
        setForkState(res.data.data.is_bucket);
        setStarState(res.data.data.is_star);
        setStarNumber(res.data.data.stars);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleActiveTab = (id) => {
    setTest(id);
  };

  return (
    <>
      <Header>
        <Container>
          {exporterInfo && (
            <OpenSourceInfo
              exporterInfo={exporterInfo}
              forkState={forkState}
              starState={starState}
              setStarState={setStarState}
              setForkState={setForkState}
              starNumber={starNumber}
              setStarNumber={setStarNumber}
            />
          )}
        </Container>
      </Header>
      <Nav>
        <Container>
          <TabList>
            {TABMENU.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  active={test == tab.id}
                  // active={localStorage.getItem("activeTab") == tab.id}
                  onClick={() => handleActiveTab(tab.id)}
                >
                  {tab.tabName}
                </Tab>
              );
            })}
          </TabList>
        </Container>
      </Nav>
      <Main>{ACTIVECONTENT_OBJ[test]}</Main>
    </>
  );
};

const Header = styled.header`
  padding: 80px 0;
`;

const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #eaecef;
`;

const TabList = styled.ul`
  display: flex;
  align-items: center;
`;

const Tab = styled.li`
  width: 160px;
  padding: 17px 0;
  border-bottom: ${(props) =>
    props.active ? "5px solid #6AC4A5" : "5px solid #00000000"};
  color: ${(props) => (props.active ? "#6AC4A5" : "#808080")};
  font-size: 17px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
`;

const Main = styled.main`
  min-height: calc(100vh - 436px);
  padding: 90px 0 50px;
  background: #f7f9fc;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 90px 15px 50px;
    border-radius: 50px 50px 0 0;
  }
`;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

export default ContentDetail;
