import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import AdminContent from "../../Content/AdminContent";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { changeBucketPage } from "../../../store/actions/exporterActions";
import { ADMIN_API, API_SURVER } from "../../../config";
import UsersContent from "../../Content/UsersContent";

const Permission = () => {
  const [searchUser, setSearchUser] = useState();
  const [adminArr, setAdminArr] = useState([]);
  const [userArr, setUserArr] = useState();
  const [alertModal, setAlertModal] = useState(false);
  const token = sessionStorage.getItem("access_token");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setSearchUser(e.target.value.toLowerCase());
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_SURVER}/user/search?q=${searchUser}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      setUserArr(res.data.data);
    });
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
      console.log("username >>>", user);
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
          console.log("addAdmin success!! >>>", res);
          showAlertModal();
        })
        .catch((err) => console.log(err));
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

  const showAlertModal = () => {
    setAlertModal(true);

    setTimeout(() => {
      setAlertModal(false);
    }, 5000);
  };

  return (
    <Container>
      <PermissionHeader>
        <PermissionTitle>Set Admin</PermissionTitle>
        <Div>
          <SearchOutlined className="search_icon" />
          <UserSearch>
            <input
              onChange={(e) => inputHandler(e)}
              type="text"
              placeholder="Search"
              value={searchUser}
            />
            {searchUser && (
              <UserContainer>
                {userArr &&
                  userArr.map((user) => {
                    return (
                      <UsersContent
                        user={user}
                        key={user.id}
                        addAdmin={addAdmin}
                      />
                    );
                  })}
              </UserContainer>
            )}
          </UserSearch>
        </Div>
      </PermissionHeader>
      <AdminContainer>
        {adminArr.map((admin, index) => {
          return (
            <AdminContent admin={admin} key={index} deleteAdmin={deleteAdmin} />
          );
        })}
      </AdminContainer>
      <AlertModal isActive={alertModal}>
        <p>Invitation has been sent to the user's email!!</p>
      </AlertModal>
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
  }
`;

const PermissionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
`;

const PermissionTitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: auto;
  /* @media ${({ theme }) => theme.media.mobile} {
      position: relative;
      display: block;
      margin: 15px 0 0;
    } */
`;

const UserSearch = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  input {
    /* @media ${({ theme }) => theme.media.mobile} {
      width: 100%;
      margin: 0;
    } */

    width: 300px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding-left: 35px;
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
  animation: move 2s ease-in-out;
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
