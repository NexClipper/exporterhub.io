import React, { useEffect } from "react";
import styled from "styled-components";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { useSelector } from "react-redux";

const DescriiptionSave = ({
  isEditMode,
  desState,
  editState,
  type,
  file,
  setEditState,
}) => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);

  useEffect(() => {
    setEditState(desState);
  }, []);

  const handleInput = (e) => {
    e.target.name === "description" && setEditState(e.target.value);
  };

  return (
    <div>
      {isEditMode && (
        <ProfileEditor dark={changeTheme}>
          <label>
            <textarea
              type={type}
              file={file}
              name="description"
              value={editState}
              cols="150"
              rows="4"
              onChange={(e) => handleInput(e)}
            ></textarea>
          </label>
        </ProfileEditor>
      )}
    </div>
  );
};
export default DescriiptionSave;

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
      word-break: keep-all;
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
