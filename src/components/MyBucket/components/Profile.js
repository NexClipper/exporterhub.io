import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding, HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { SERVER } from "../../../config";

const Profile = ({ userProfile }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState();
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();

  const handleProfileEdit = () => {
    setEditMode(!isEditMode);
    setFullName(userProfile.fullName);
    setCompany(userProfile.organization);
    setEmail(userProfile.email);
  };

  const handleInput = (e) => {
    e.target.name === "fullname" && setFullName(e.target.value);
    e.target.name === "company" && setCompany(e.target.value);
    e.target.name === "email" && setEmail(e.target.value);
  };

  const handleSave = () => {
    axios({
      method: "PATCH",
      url: `${SERVER}/user/profile`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      data: {
        email: email,
        name: fullName,
        organization: company,
      },
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        alert("Error");
        handleProfileEdit();
      });
  };

  return (
    <UserInfo>
      <ProfileImage src={userProfile.profileImageUrl} />
      <div>
        <div>
          <Name>
            {userProfile.username}
            {userProfile.fullName && (
              <FullName>({userProfile.fullName})</FullName>
            )}
          </Name>
          <Button onClick={handleProfileEdit}>
            <span>
              <RiUserSettingsLine />
            </span>
            <span>Edit Profile</span>
          </Button>
        </div>
        <Introduce>{userProfile.intro}</Introduce>
        {userProfile.organization && (
          <Organization>
            <HiOutlineOfficeBuilding />
            <span>Company : </span>
            <span>{userProfile.organization}</span>
          </Organization>
        )}
        {userProfile.email && (
          <Organization>
            <HiOutlineMail />
            <span>Email : </span>
            <span>{userProfile.email}</span>
          </Organization>
        )}
      </div>
      {isEditMode && (
        <ProfileEditor>
          <label>
            <AiOutlineUser />
            <input
              name="fullname"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label>
            <HiOutlineOfficeBuilding />
            <input
              name="company"
              placeholder="Company"
              value={company}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label>
            <HiOutlineMail />
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <EditorBtns>
            <Button onClick={handleSave}>
              <span>Save</span>
            </Button>
            <Button onClick={handleProfileEdit}>
              <span>Cancel</span>
            </Button>
          </EditorBtns>
        </ProfileEditor>
      )}
    </UserInfo>
  );
};

export default Profile;

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

const FullName = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 15px;
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
  margin-bottom: 15px;
  color: #999999;
  font-size: 17px;
  font-weight: 500;
`;

const Organization = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #999999;

  span {
    position: relative;
    top: -2px;
    margin: 0 0 0 5px;
  }
`;

const ProfileEditor = styled.div`
  position: absolute;
  left: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 200px;
  background-color: white;

  label {
    display: flex;
    align-items: center;
    width: 280px;
    margin-bottom: 15px;
    color: #6c737c;

    span {
      position: relative;
      top: -1px;
      margin-left: 3px;
    }

    input {
      width: 220px;
      height: 25px;
      margin-left: 10px;
      padding: 0 5px;
      border: 1px solid #e2e4e8;
      color: #25292e;
      font-weight: 500;
      outline: none;

      &::placeholder {
        color: #6c737c;
      }
    }
  }
`;

const EditorBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;
