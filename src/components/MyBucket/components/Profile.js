import React from "react";
import styled from "styled-components";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Profile = ({ userProfile }) => {
  return (
    <UserInfo>
      <ProfileImage src={userProfile.profileImageUrl} />
      <div>
        <div>
          <Name>{userProfile.username}</Name>
          <Button>
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
            {userProfile.organization}
          </Organization>
        )}
      </div>
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

const Organization = styled.p`
  display: flex;
  align-items: center;
  margin-top: 13px;
  color: #999999;

  span {
    margin-left: 5px;
  }
`;
