import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { EXPORTER_API } from "../../config";
import { RiUserSettingsLine } from "react-icons/ri";
import Fork from "./components/Fork";
import Permission from "./components/Permission";
import UnforkModal from "../Modal/UnforkModal";

const TABMENU = [
  { id: 0, tabName: "Fork" },
  { id: 1, tabName: "Permission" },
];

const MyBucket = () => {
  const { id } = useParams();
  const [exporterInfo, setExporterInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isForkModalActive, setIsForkModalActive] = useState(false);

  const cancleModal = () => {
    setIsForkModalActive(false);
  };

  const ACTIVECONTENT_OBJ = {
    0: <Fork setIsForkModalActive={setIsForkModalActive} />,
    1: <Permission />,
  };

  useEffect(() => {
    axios.get(`${EXPORTER_API}/${id}`).then((res) => {
      setExporterInfo(res.data);
    });
  }, []);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <Header>
        <Container>
          <UserInfo>
            <ProfileImage src="https://avatars.githubusercontent.com/u/75073867?v=4" />
            <div>
              <div>
                <Name>saemsolyoo</Name>
                <Button>
                  <span>
                    <RiUserSettingsLine />
                  </span>
                  <span>Edit Profile</span>
                </Button>
              </div>
              <Introduce>beautiful world</Introduce>
            </div>
          </UserInfo>
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
      {isForkModalActive && <UnforkModal cancleModal={cancleModal} />}
    </>
  );
};

const Header = styled.header`
  padding: 80px 0;
`;

const UserInfo = styled.div`
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

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 70px;
  border-radius: 50%;

  /* @media ${({ theme }) => theme.media.mobile} {
    width: 150px;
    height: 150px;
  } */
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

const Introduce = styled.p`
  color: #999999;
  font-size: 17px;
  font-weight: 500;
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

export default MyBucket;
