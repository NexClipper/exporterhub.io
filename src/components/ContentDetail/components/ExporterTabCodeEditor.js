import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import axios from "axios";
import { HiOutlineSave } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  edittingExporterTabContent,
  edittingExporterTabFileName,
  edittingExporterTabDescription,
  beforeEdittingExporterTab,
} from "../../../store/actions/exporterActions";
import { API_SURVER } from "../../../config";
import { useParams } from "react-router";

const ExporterTabCodeEditor = ({
  setExporterCsv,
  fileName,
  fileDescription,
  fileContent,
  handleMode,
  type,
  fileSha,
  csvSha,
  fileId,
  setModify,
  exporterCsv,
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const edittingExporterFile = useSelector(
    (store) => store.exporterTabEdittingReducer
  );
  const beforeEditFile = useSelector(
    (store) => store.exporterTabBeforeEditReducer
  );
  const [sameFileName, setSameFileName] = useState(false);

  useEffect(() => {
    dispatch(
      beforeEdittingExporterTab(
        fileName === ""
          ? {
              fileName: "",
              description: "",
              content: "",
            }
          : {
              fileName: fileName.slice(0, fileName.lastIndexOf("_")),
              description: fileDescription,
              content: fileContent,
            }
      )
    );
    dispatch(edittingExporterTabContent(fileName === "" ? "" : fileContent));
    dispatch(
      edittingExporterTabDescription(fileName === "" ? "" : fileDescription)
    );
    dispatch(
      edittingExporterTabFileName(
        fileName === "" ? "" : fileName.slice(0, fileName.lastIndexOf("_"))
      )
    );
  }, [fileName]);

  const onChange = (value) => {
    dispatch(edittingExporterTabContent(value));
  };

  const handleFileInfo = ({ target }) => {
    if (target.id === "codeEdit") {
      dispatch(edittingExporterTabContent(target.value));
    } else if (target.id === "fileName") {
      dispatch(edittingExporterTabFileName(target.value));
    } else if (target.id === "description") {
      dispatch(edittingExporterTabDescription(target.value));
    }
  };

  const handleSave = () => {
    let isSame = [];
    if (beforeEditFile.fileName === edittingExporterFile.fileName) {
      isSame = [];
    } else {
      isSame = exporterCsv.filter(
        (file) =>
          edittingExporterFile.fileName.toLowerCase() ===
          file.file_url
            .slice(
              file.file_url.lastIndexOf("/") + 1,
              file.file_url.lastIndexOf("_")
            )
            .toLowerCase()
      );
    }

    if (isSame.length === 0) {
      setExporterCsv("default");
      setModify(false);
      handlefetchGithub();
    } else {
      setSameFileName(true);
    }
  };

  const handlefetchGithub = () => {
    const fileType = type.slice(1, type.lastIndexOf("."));
    axios({
      method: "POST",
      url: `${API_SURVER}/exporter/${id}/tab?type=${fileType}`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      data: {
        file_id: fileId,
        file_content: edittingExporterFile.content,
        file_name: edittingExporterFile.fileName,
        file_sha: fileSha,
        csv_sha: csvSha,
        csv_desc: edittingExporterFile.description,
      },
    })
      .then((res) => {
        handleMode();
      })
      .catch((err) => {
        handleMode();
        console.log(err);
      });
  };

  return (
    <Container
      dark={changeTheme}
      IsEdit={beforeEditFile.content !== edittingExporterFile.content}
    >
      <EditorContainer>
        <Inputbox className="prevent">
          <FileName dark={changeTheme}>
            <Input
              IsEdit={beforeEditFile.fileName !== edittingExporterFile.fileName}
              id="fileName"
              value={edittingExporterFile.fileName}
              type="text"
              placeholder="FileName"
              dark={changeTheme}
              onChange={handleFileInfo}
            />

            <p> {type}</p>
          </FileName>
          {sameFileName && <Same>same name</Same>}
          <Input
            IsEdit={
              beforeEditFile.description !== edittingExporterFile.description
            }
            id="description"
            as="textarea"
            name="content"
            placeholder="Description"
            value={edittingExporterFile.description}
            cols="150"
            rows="3"
            dark={changeTheme}
            onChange={handleFileInfo}
          />
        </Inputbox>
        <AceEditor
          className="editer"
          id="codeEider"
          width="100%"
          height="100%"
          placeholder="Enter code"
          mode="javascript"
          dark={changeTheme}
          theme={!changeTheme ? "github" : "twilight"}
          name="blah2"
          onChange={onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={false}
          highlightActiveLine={true}
          value={edittingExporterFile.content}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: false,
            tabSize: 2,
            overscrollBehaviorX: "none",
          }}
        />
      </EditorContainer>
      <Button onClick={handleSave}>
        <span>
          <HiOutlineSave />
        </span>
        <span>Save</span>
      </Button>
    </Container>
  );
};
export default ExporterTabCodeEditor;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 3px;

  .ace_editor,
  .ace_editor * {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Droid Sans Mono", "Consolas",
      monospace !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    letter-spacing: 0 !important;
    line-height: 1.3 !important;
  }
  .ace_editor {
    border: ${(props) =>
      props.dark
        ? "1px solid #ffffff"
        : props.IsEdit
        ? "1px solid #69c4a6"
        : "1px solid rgba(0, 0, 0, 0.2)"};
    border-radius: 4px;
  }
`;

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 800px; */
  height: 400px;
  margin-top: 30px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  margin-top: 30px;
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

const Inputbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const FileName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  p {
    padding-left: 7px;
    color: ${(props) => (props.dark ? "#ffffff" : "#black")};
  }
`;

const Input = styled.input`
  margin: 5px 0px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    margin: 5px 0px;
  }
  width: ${(props) => (props.placeholder === "fileName" ? "400px" : "100%")};
  height: ${(props) => (props.as ? "" : "30px")};
  resize: ${(props) => (props.as ? "none" : "")};
  word-break: keep-all;
  margin: ${(props) =>
    props.placeholder === "fileName" ? "" : "20px 0px 20px"};
  border: ${(props) =>
    props.dark
      ? "1px solid #ffffff"
      : props.IsEdit
      ? "1px solid #69c4a6"
      : "1px solid rgba(0, 0, 0, 0.2)"};
  border-radius: 4px;
  padding-left: 15px;
  background-color: ${(props) => (props.dark ? "#18191a" : "#ffffff")};
  color: ${(props) => (props.dark ? "#ffffff" : "#black")};
  font-size: ${(props) => (props.placeholder === "fileName" ? "20px" : "15px")};
  letter-spacing: 0.08rem;
  outline: none;
`;

const Same = styled.p`
  color: red;
`;
