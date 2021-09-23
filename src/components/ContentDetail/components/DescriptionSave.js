import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";
// import "./App.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import axios from "axios";
import { HiOutlineSave } from "react-icons/hi";
import { BiUndo } from "react-icons/bi";
//md test
import remarkMarkdown from "../remarkMarkdown";
import { API_SURVER } from "../../../config";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const DescriiptionSave = ({
  EXPORTER_API,
  exporterInfo,
  githubContent,
  showAlertModal,
  isEditMode,
  desState,
  setDesState,
  handleEdit,
  title,
  type,
  file,
}) => {
  const { id } = useParams();
  const changeTheme = useSelector((store) => store.darkThemeReducer);

  // const [decode, setDecode] = useState();
  const handleInput = (e) => {
    e.target.name === "description" && setDesState(e.target.value);
  };

  useEffect(() => {
    setDesState(desState === null ? "" : desState);
  }, [desState]);

  const handleSave = () => {
    axios({
      method: "POST",
      url: `${EXPORTER_API}/${id}`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      data: {
        descripton: desState,
      },
    })
      .then((res) => {
        handleEdit();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container>
        <div>
          <SaveButton onClick={handleSave}>
            <span>
              <HiOutlineSave />
            </span>
            <span>Save</span>
          </SaveButton>
        </div>
      </Container>
      {isEditMode && (
        <ProfileEditor dark={changeTheme}>
          <label>
            <textarea
              type={type}
              file={file}
              name="description"
              value={desState}
              onChange={(e) => handleInput(e)}
            ></textarea>
          </label>
        </ProfileEditor>
      )}
    </>
  );
};
export default DescriiptionSave;

const Container = styled.div`
  position: relative;
  padding: 10px;
  border-radius: 3px;
  /* border-top-left-radius: 3px;
  border-top-right-radius: 3px; */

  .ace_editor,
  .ace_editor * {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Droid Sans Mono", "Consolas",
      monospace !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    letter-spacing: 0 !important;
    line-height: 1.3 !important;
    /* background-color: red; */
  }
`;

const SaveButton = styled.button`
  position: absolute;
  top: -47px;
  right: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 70px;
  height: 25px;
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

  @media ${({ theme }) => theme.media.mobile} {
    top: -110px;
    right: 0px;
    width: 80px;
  }
`;

const Button = styled.button`
  /* width: 60px; */
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${(props) => (props.dark ? "#f5f6f7" : "#ffffff")};
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.forkState ? "#8D8D8D" : "black")};

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 10px;
    position: relative;
    top: 2px;
    z-index: 10;
  }

  span {
    font-size: 12px;
    &:first-child {
      position: relative;
      top: 1px;
      margin-right: 5px;
      font-size: 13px;
    }
  }
  a {
    color: inherit;
    .link {
      position: relative;
      top: 1px;
      margin-right: 5px;
    }
  }
`;

const ProfileEditor = styled.div`
  left: 220px;
  display: flex;
  background-color: ${(props) => (props.dark ? "#18191a" : "white")};

  label {
    display: flex;
    align-items: center;
    width: 840px;
    color: #6c737c;

    textarea {
      width: 100%;
      height: 100px;
      padding: 5px;
      resize: none;
      border: ${(props) =>
        props.dark ? "1px solid #6c737c" : "1px solid #e2e4e8"};
      /* color: #25292e; */
      color: ${(props) => (props.dark ? "#f5f6f7" : "#25292e")};
      font-weight: 500;
      outline: none;
      background-color: ${(props) => (props.dark ? "#242526" : "white")};

      &::placeholder {
        color: ${(props) => (props.dark ? "#6c737c" : "#25292e")};
      }
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    top: 80px;
    left: 20px;
  }
`;
