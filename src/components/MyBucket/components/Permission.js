import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import AdminContent from "../../Content/AdminContent";

//필터변경
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { changeBucketPage } from "../../../store/actions/exporterActions";
import { ADMIN_API, SERVER } from "../../../config";
// import userTable from "./userTable.json";
import UsersContent from "../../Content/UsersContent";

const Permission = () => {
  const [searchUser, setSearchUser] = useState();
  const [adminArr, setAdminArr] = useState([]);
  const [userArr, setUserArr] = useState();
  const token = sessionStorage.getItem("access_token");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setSearchUser(e.target.value.toLowerCase());
    axios({
      method: "GET",
      url: `${SERVER}/user/search?q=${searchUser}`,
      headers: {
        Authorization: token,
      },
      // method: "GET",
      // url: "/data/userTable.json",
    }).then((res) => {
      console.log("czcz >>> ", res.data.data);
      setUserArr(res.data.data);
      // =======
      // const users = res.data;
      // console.log("users는 >> ", users);
      // const filterUserData = users.filter((user) => {
      //   return user.name.includes(searchUser);
      // });
      // setUserArr(filterUserData);
      // console.log("필터링 됬음 >> ", filterUserData);
      // console.log("필터 된것은 >> ", filterUserData);
      // setUserArr(res.data);
      // console.log(res.data);
    });
  };
  console.log(searchUser);

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

  const addAdmin = (user) => {
    console.log("뭐눌렀니? >>>", user);
    console.log(typeof user);
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
        console.log("ㅎㅎ >>>", res);
      })
      .catch((err) => console.log(err));
    // axios({
    //   method: "POST",
    //   url: "",
    //   data: {},
    //   headers: {
    //     Authorization: token,
    //   },
    // })
    //   .then((res) => {
    //     console.log("성공했니? >>", res);
    //   })
    //   .catch((err) => console.log(err));
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

  return (
    <Container>
      <PermissionHeader>
        <PermissionTitle>Permission</PermissionTitle>
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
            <AdminContent
              admin={admin}
              key={index}
              deleteAdmin={deleteAdmin}
              // onClick={(e) => deleteAdmin(e)}
            />
          );
        })}
      </AdminContainer>
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
    @media ${({ theme }) => theme.media.mobile} {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
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
  height: 400px;
  overflow-y: auto;
`;
