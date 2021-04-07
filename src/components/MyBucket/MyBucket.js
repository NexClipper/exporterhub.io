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
import AdminAddModal from "../Modal/AdminAddModal";
import AdminDeleteModal from "../Modal/AdminDeleteModal";
import { API_SURVER } from "../../config";

const MyBucket = () => {
  const isAdmin = useSelector((store) => store.adminReducer);
  const changeBucket = useSelector((store) => store.headerReducer);
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isForkModalActive, setIsForkModalActive] = useState(false);
  const [isAdminAddModalActive, setIsAdminAddModalActive] = useState(false);
  // const [isAdminDeleteModalActive, setIsAdminDeleteModalActive] = useState(
  //   false
  // );
  const [userProfile, setUserProfile] = useState();

  const ACTIVECONTENT_OBJ = {
    0: (
      <Fork
        setIsForkModalActive={setIsForkModalActive}
        isForkModalActive={isForkModalActive}
      />
    ),
    1: (
      <Permission
        isAdminAddModalActive={isAdminAddModalActive}
        setIsAdminAddModalActive={setIsAdminAddModalActive}
      />
    ),
  };

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
      url: `${API_SURVER}/user/profile`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then((res) => {
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
      <Header dark={changeTheme}>
        <Container>
          {userProfile && <Profile userProfile={userProfile} />}
        </Container>
      </Header>
      <Nav dark={changeTheme}>
        <Container>
          <TabList>
            {TABMENU.map((tab) => {
              return (
                <Tab
                  dark={changeTheme}
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
      <Main dark={changeTheme}>{ACTIVECONTENT_OBJ[changeBucket]}</Main>
      {isForkModalActive && <UnforkModal cancleModal={cancleModal} />}
      {isAdminAddModalActive && <AdminAddModal />}
      {/* {isAdminDeleteModalActive && (
        <AdminDeleteModal cancleAdminDeleteModal={cancleAdminDeleteModal} />
      )} */}
    </>
  );
};

const Header = styled.header`
  padding: 80px 0;
  background-color: ${(props) => props.dark && "#18191a"};
`;

const Nav = styled.nav`
  width: 100%;
  border-bottom: ${(props) =>
    props.dark ? "1px solid #242526" : "1px solid #eaecef"};
  background-color: ${(props) => props.dark && "#18191a"};
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
  color: ${(props) => (props.dark ? "#f5f6f7" : "#808080")};
  color: ${(props) => props.active && "#6AC4A5"};
  font-size: 17px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;

  @media ${({ theme }) => theme.media.mobile} {
    width: 50%;
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 436px);
  max-height: fit-content;
  padding: 90px 0 50px;
  background: ${(props) => (props.dark ? "#18191a" : "#f7f9fc")};

  @media ${({ theme }) => theme.media.mobile} {
    padding: 30px 15px 50px;
  }
`;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

export default MyBucket;
