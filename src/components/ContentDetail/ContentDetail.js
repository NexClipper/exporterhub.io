import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BUCKET_API, EXPORTER_API } from "../../config";
import Exporter from "./components/Exporter";
import Dashboard from "./components/Dashboard";
import Alert from "./components/Alert";
import { RiShoppingBasketLine } from "react-icons/ri";

const TABMENU = [
  { id: 0, tabName: "Exporter" },
  { id: 1, tabName: "Dashboard" },
  { id: 2, tabName: "Alert" },
];

const ContentDetail = () => {
  const { id } = useParams();
  const [exporterInfo, setExporterInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const ACTIVECONTENT_OBJ = {
    0: <Exporter readmeContent={exporterInfo.readme} />,
    1: <Dashboard />,
    2: <Alert />,
  };

  useEffect(() => {
    axios.get(`${EXPORTER_API}/${id}`).then((res) => {
      setExporterInfo(res.data);
    });
  }, []);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  const addToFork = (exporterInfo) => {
    if (!sessionStorage.getItem("access_token")) {
      alert("You need to Sign in");
      return;
    }

    axios({
      method: "POST",
      url: `${BUCKET_API}`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      data: {
        exporter_id: exporterInfo["exporter_id"],
      },
    })
      .then((res) => {
        console.log(res);
        console.log("성공!!");
      })
      .catch((err) => {
        console.log(err);
        console.log("에러 ㅠㅠ");
      });
  };

  return (
    <>
      <Header>
        <Container>
          <OpenSourceInfo>
            <a href={exporterInfo.repository_url} target="_blank">
              <HeaderLogo src={exporterInfo.logo_url} alt="opensource_logo" />
            </a>
            <div>
              <div>
                <a href={exporterInfo.repository_url} target="_blank">
                  <Name>{exporterInfo.name}</Name>
                </a>
                <Button onClick={() => addToFork(exporterInfo)}>
                  <span>
                    <RiShoppingBasketLine />
                  </span>
                  <span>Add</span>
                </Button>
              </div>
              <div>
                <Category>{exporterInfo.category}</Category>
                <StarIcon>
                  <AiFillStar /> {exporterInfo.stars}
                </StarIcon>
              </div>
            </div>
          </OpenSourceInfo>
        </Container>
      </Header>
      <Nav>
        <Container>
          <TabList>
            {TABMENU.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => handleActiveTab(tab.id)}
                >
                  {tab.tabName}
                </Tab>
              );
            })}
          </TabList>
        </Container>
      </Nav>
      <Main>{ACTIVECONTENT_OBJ[activeTab]}</Main>
    </>
  );
};

const Header = styled.header`
  padding: 80px 0;
`;

const OpenSourceInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    div {
      display: flex;
      align-items: center;

      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

const HeaderLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 70px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.h4`
  margin-right: 30px;
  color: #000000;
  font-size: 17px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: #ffffff;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;

  span {
    font-size: 12px;

    &:first-child {
      position: relative;
      top: 1px;
      margin-right: 5px;
      font-size: 13px;
    }
  }
`;

const Category = styled.p`
  margin-right: 15px;
  padding: 5px 20px 8px 20px;
  font-size: 17px;
  font-weight: 400;
  border-radius: 5px;
  background-color: #f1f4f8;
`;

const StarIcon = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #ffd200;

  svg {
    vertical-align: middle;
  }
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
`;

const Main = styled.main`
  padding: 90px 0 50px;
  border-radius: 50px 0 0 0;
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
