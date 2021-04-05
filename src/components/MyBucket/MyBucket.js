import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Profile from "./components/Profile";
import Fork from "./components/Fork";
import Permission from "./components/Permission";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changeBucketPage } from "../../store/actions/exporterActions";
import UnforkModal from "../Modal/UnforkModal";
import { API_SURVER } from "../../config";

const MyBucket = () => {
  const isAdmin = useSelector((store) => store.adminReducer);
  const changeBucket = useSelector((store) => store.headerReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isForkModalActive, setIsForkModalActive] = useState(false);
  const [userProfile, setUserProfile] = useState();
  console.log("여기 버켓이야 버켓 !!! ", history.location.pathname);
  const ACTIVECONTENT_OBJ = {
    0: (
      <Fork
        setIsForkModalActive={setIsForkModalActive}
        isForkModalActive={isForkModalActive}
      />
    ),
    1: <Permission />,
  };

  // const TABMENU = [
  //   { id: 0, tabName: "Fork" },
  //   { id: 1, tabName: "Set Admin" },
  // ];

  const TABMENU = isAdmin
    ? [
        { id: 0, tabName: "Fork" },
        { id: 1, tabName: "Set Admin" },
      ]
    : [{ id: 0, tabName: "Fork" }];

  const cancleModal = () => {
    setIsForkModalActive(false);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_SURVER}:8000/user/profile`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setUserProfile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    handleLocalStorage();
  }, []);

  const handleLocalStorage = () => {
    if (history.location.pathname === "/mybucket") {
      localStorage.setItem("activeTab", "0");
    } else {
      return;
    }
  };

  return (
    <>
      <Header>
        <Container>
          {userProfile && <Profile userProfile={userProfile} />}
        </Container>
      </Header>
      <Nav>
        <Container>
          <TabList>
            {TABMENU.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  active={changeBucket === tab.id}
                  onClick={() => dispatch(changeBucketPage(tab.id))}
                >
                  {tab.tabName}
                </Tab>
              );
            })}
          </TabList>
        </Container>
      </Nav>
      <Main>{ACTIVECONTENT_OBJ[changeBucket]}</Main>
      {isForkModalActive && <UnforkModal cancleModal={cancleModal} />}
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
  max-height: fit-content;
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

export default MyBucket;
