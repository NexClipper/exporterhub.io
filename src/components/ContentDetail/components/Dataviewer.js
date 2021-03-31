import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { HiOutlineSave } from "react-icons/hi";
import CodeEditor from "./CodeEditor";

const Dataviewer = ({
  content,
  isEditMode,
  setIsEditMode,
  handleMode,
  title,
  type,
}) => {
  const isAdmin = useSelector((store) => store.adminReducer);

  return (
    <>
      <Header>
        <ContentTitle>
          {title}
          {type}
        </ContentTitle>
        {isAdmin && (
          <Button onClick={handleMode}>
            <span>{!isEditMode ? <FiEdit /> : <HiOutlineSave />}</span>
            <span>{!isEditMode ? "Edit" : "Save"}</span>
          </Button>
        )}
      </Header>
      <ContentBody>
        {!isEditMode ? (
          <Data>
            {/* <p>{atob(data.content)}</p> */}
            <p>{content}</p>
          </Data>
        ) : (
          <CodeEditor content={content} title={title} type={type} />
        )}
      </ContentBody>
    </>
  );
};

export default Dataviewer;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const ContentTitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
`;

const ContentBody = styled.div``;

const Data = styled.pre`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: black;
  padding: 30px;
  border-radius: 5px;
  background-color: #f1f4f8;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
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
