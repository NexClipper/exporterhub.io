import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import AdminContent from "../../Content/AdminContent";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { changeBucketPage } from "../../../store/actions/exporterActions";
import { ADMIN_API, API_SURVER } from "../../../config";
import UsersContent from "../../Content/UsersContent";
import AdminDeleteModal from "../../Modal/AdminDeleteModal";
import AdminAddModal from "../../Modal/AdminAddModal";
import DeleteModal from "../../Modal/DeleteModal";

const Permission = () => {
  const [searchUser, setSearchUser] = useState("");
  const [adminArr, setAdminArr] = useState([]);
  const [userArr, setUserArr] = useState([]);
  const [alertModal, setAlertModal] = useState(false);
  const [isAdminAddModalActive, setIsAdminAddModalActive] = useState(false);
  const [isAdminDeleteModalActive, setIsAdminDeleteModalActive] =
    useState(false);
  const [selectedAdmin, setSelectedAdmiin] = useState();
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [cancelInvitation, setCancelInvitaion] = useState(false);
  const token = sessionStorage.getItem("access_token");
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const dispatch = useDispatch();

  const cancleAdminAddModal = () => {
    setIsAdminAddModalActive(false);
  };

  const cancleAdminDeleteModal = () => {
    setIsAdminDeleteModalActive(false);
  };

  const inputHandler = (e) => {
    setSearchUser(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (searchUser !== "") {
      axios({
        method: "GET",
        url: `${API_SURVER}/user/search?q=${searchUser}`,
        headers: {
          Authorization: token,
        },
      }).then((res) => {
        setUserArr(res.data.data);
      });
    }
  }, [searchUser]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${ADMIN_API}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setAdminArr(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addAdmin = (user, type) => {
    if (type === "admin" || type === "admin pending") {
      return;
    } else {
      setSearchUser("");
      axios({
        method: "POST",
        url: `${ADMIN_API}`,
        data: {
          username: user,
        },
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          showAlertModal();
          setIsAdminAddModalActive(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteAdmin = (name) => {
    axios({
      method: "PATCH",
      url: `${ADMIN_API}`,
      data: { username: name },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.status === 204) {
          window.location.reload();
          dispatch(changeBucketPage(1));
          return;
        }
      })
      .catch((err) => console.log(err));
  };

  const pendingCancel = (answer) => {
    if (answer === "Yes") {
      axios({
        method: "DELETE",
        url: `${ADMIN_API}?username=${userName}`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          if (res.status === 204) {
            setSearchUser("");
            setCancelInvitaion(false);
            return;
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCancelInvitaion(false);
    }
  };

  const showAlertModal = () => {
    setAlertModal(true);

    setTimeout(() => {
      setAlertModal(false);
    }, 5000);
  };

  const handleAdminAdd = ({ target }) => {
    if (target.id === "user") {
      setUserName(target.name);
      setUserType(target.id);
      setIsAdminAddModalActive(true);
    }
  };

  const handlePending = (e) => {
    e.stopPropagation();
    if (e.target.id === "admin pending") {
      setUserName(e.target.name);
      setUserType(e.target.id);
      setCancelInvitaion(true);
    }
  };

  return (
    <Container dark={changeTheme}>
      <PermissionHeader>
        <PermissionTitle dark={changeTheme}>Set Admin</PermissionTitle>
        <Div>
          <SearchOutlined dark={changeTheme} className="search_icon" />
          <UserSearch dark={changeTheme}>
            <input
              onChange={(e) => inputHandler(e)}
              type="text"
              placeholder="Search"
              value={searchUser}
            />
            {searchUser && (
              <UserContainer>
                {userArr &&
                  userArr.map((user, index) => {
                    return (
                      <UsersContent
                        user={user}
                        key={index}
                        setCancelInvitaion={setCancelInvitaion}
                        handleAdminAdd={handleAdminAdd}
                        handlePending={handlePending}
                      />
                    );
                  })}
              </UserContainer>
            )}
          </UserSearch>
        </Div>
      </PermissionHeader>
      <AdminContainer dark={changeTheme}>
        {adminArr.map((admin, index) => {
          return (
            <AdminContent
              admin={admin}
              key={index}
              isAdminDeleteModalActive={isAdminDeleteModalActive}
              setIsAdminDeleteModalActive={setIsAdminDeleteModalActive}
              setSelectedAdmiin={setSelectedAdmiin}
            />
          );
        })}
      </AdminContainer>
      <AlertModal isActive={alertModal}>
        <p>Invitation has been sent to the user's email!!</p>
      </AlertModal>
      {isAdminDeleteModalActive && (
        <AdminDeleteModal
          adminName={selectedAdmin}
          deleteAdmin={deleteAdmin}
          cancleAdminDeleteModal={cancleAdminDeleteModal}
        />
      )}
      {cancelInvitation && (
        <DeleteModal
          content="Cancel the invitation ?"
          handleDelete={pendingCancel}
        />
      )}
      {isAdminAddModalActive && (
        <AdminAddModal
          userName={userName}
          userType={userType}
          addAdmin={addAdmin}
          cancleAdminAddModal={cancleAdminAddModal}
          setSearchUser={setSearchUser}
        />
      )}
    </Container>
  );
};

export default Permission;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ theme }) => theme.container}

  .search_icon {
    position: relative;
    left: 30px;
    z-index: 1;
    color: ${(props) => props.dark && "#f5f6f7"};
  }
`;

const PermissionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5px;
  }
`;

const PermissionTitle = styled.h4`
  padding-bottom: ${({ pending }) => pending && "30px"};
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
  color: ${(props) => props.dark && "#f5f6f7"};

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: auto;

  @media ${({ theme }) => theme.media.mobile} {
    position: relative;
    left: -17px;
    margin: 0;
  }
`;

const UserSearch = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  input {
    width: 300px;
    height: 40px;
    color: ${(props) => props.dark && "#f5f6f7"};
    border: ${(props) =>
      props.dark ? "1px solid #6c737c" : "1px solid rgba(0, 0, 0, 0.2)"};
    border-radius: 4px;
    padding-left: 35px;
    background-color: ${(props) => props.dark && "#18191a"};
  }
`;

const UserContainer = styled.div`
  position: absolute;
  width: 100%;
  max-height: 300px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
  top: 40px;
`;

const AdminContainer = styled.div`
  ${({ theme }) => theme.container}
  height: fit-content;
  max-height: 400px;
  overflow-y: auto;
`;

const AlertModal = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  justify-content: center;
  top: -83px;
  width: 100%;
  position: absolute;
  animation: move 3s ease-in-out;
  opacity: 0%;

  p {
    width: fit-content;
    height: 50px;
    padding: 15px 20px;
    background: #ffffff;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    line-height: 1.6;
  }

  @keyframes move {
    0% {
      transform: translateY(0);
      opacity: 100%;
    }
    20% {
      transform: translateY(14px);
      opacity: 100%;
    }
    95% {
      transform: translateY(14px);
      opacity: 100%;
    }
    98% {
      opacity: 80%;
    }
    100% {
      transform: translateY(0);
      opacity: 0%;
    }
  }
`;

const pendinguser = [
  {
    username: "jeckzin",
    usertype: "admin pending",
    profileImageUrl: "https://avatars.githubusercontent.com/u/90562434?v=4",
  },
  {
    username: "byoungjupark",
    usertype: "admin pending",
    profileImageUrl: "https://avatars.githubusercontent.com/u/63541271?v=4",
  },
];
