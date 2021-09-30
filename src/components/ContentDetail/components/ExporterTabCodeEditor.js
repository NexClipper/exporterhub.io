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
  edittingExporterTabVersion,
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
  fileVersion,
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

  const descriptionEncode = (description) => {
    let descriptionEncodeValue = JSON.stringify(description)
      .replace(/\\n/g, "@>@")
      .replace(/\\"/g, "@$#");
    return descriptionEncodeValue.slice(1).slice(0, -1);
  };

  const descriptionDecode = (description) => {
    let descriptionDecodeValue = description
      .replace(/@>@/g, "\n")
      .replace(/@\$#/g, '"');
    return descriptionDecodeValue;
  };

  useEffect(() => {
    dispatch(
      beforeEdittingExporterTab(
        fileName === ""
          ? {
              fileName: "",
              description: "",
              content: "",
              version: "",
            }
          : {
              fileName: fileName.slice(0, fileName.lastIndexOf("_")),
              description: fileDescription,
              content: fileContent,
              version: fileVersion,
            }
      )
    );
    dispatch(edittingExporterTabContent(fileId === "" ? "" : fileContent));
    dispatch(
      edittingExporterTabDescription(fileId === "" ? "" : fileDescription)
    );
    dispatch(
      edittingExporterTabFileName(
        fileId === "" ? "" : fileName.slice(0, fileName.lastIndexOf("_"))
      )
    );

    dispatch(edittingExporterTabVersion(fileId === "" ? "" : fileVersion));
  }, [fileName]);

  const onChange = (value) => {
    dispatch(edittingExporterTabContent(value));
  };

  const handleFileInfo = ({ target }) => {
    if (target.id === "codeEdit") {
      dispatch(edittingExporterTabContent(target.value));
    } else if (target.id === "fileName") {
      setSameFileName(false);
      dispatch(edittingExporterTabFileName(target.value));
    } else if (target.id === "description") {
      dispatch(edittingExporterTabDescription(target.value));
    } else if (target.id === "version") {
      dispatch(edittingExporterTabVersion(target.value));
      beforeEditFile.version !== "" && target.value !== beforeEditFile.version
        ? setSameFileName(
            "*A new file is created when the version number changes"
          )
        : setSameFileName(false);
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
          descriptionDecode(
            file.file_url
              .slice(
                file.file_url.lastIndexOf("/") + 1,
                file.file_url.lastIndexOf("_")
              )
              .toLowerCase()
          )
      );
    }
    let isSameVersion = [];
    if (beforeEditFile.version === edittingExporterFile.version) {
      isSameVersion = [];
    } else {
      isSameVersion = exporterCsv.filter(
        (file) => edittingExporterFile.version === file.version
      );
    }

    if (type !== "_helm.yaml" && edittingExporterFile.version !== "") {
      if (edittingExporterFile.fileName === "") {
        setSameFileName("Enter the file name.");
      } else if (isSameVersion.length === 0 && isSame.length !== 0) {
        setSameFileName("The same file name exists in same version");
      } else if (isSame.length === 0 || isSameVersion.length === 0) {
        setExporterCsv("default");
        setModify(false);
        handlefetchGithub();
      } else {
        setSameFileName("The same file name exists in same version");
      }
    } else if (
      isSameVersion.length === 0 &&
      edittingExporterFile.version !== ""
    ) {
      setExporterCsv("default");
      setModify(false);
      handlefetchGithub();
    } else if (edittingExporterFile.version === "") {
      setSameFileName("Enter the version.");
    } else {
      setSameFileName("The same version exists.");
    }
  };
  // console.log(`file_id:${fileId},
  //       file_content: ${edittingExporterFile.content},
  //       file_name: ${descriptionEncode(edittingExporterFile.fileName)},
  //       file_sha: ${fileSha},
  //       csv_sha: ${csvSha},
  //       csv_desc: ${descriptionEncode(edittingExporterFile.description)},
  //       version: ${edittingExporterFile.version},`);
  const handlefetchGithub = () => {
    const fileType = type.slice(1, type.lastIndexOf("."));
    axios({
      method: "POST",
      url: `${API_SURVER}/exporter/${id}/tab?type=${fileType}`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      data: {
        file_id: fileId.slice(0, fileId.lastIndexOf("/")),
        file_content: edittingExporterFile.content,
        file_name: descriptionEncode(edittingExporterFile.fileName),
        file_sha: fileSha,
        csv_sha: csvSha,
        csv_desc: descriptionEncode(edittingExporterFile.description),
        version: edittingExporterFile.version,
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
          {type !== "_helm.yaml" ? (
            <FileName dark={changeTheme}>
              <FileInputbox>
                <Input
                  IsEdit={
                    beforeEditFile.fileName !== edittingExporterFile.fileName
                  }
                  id="fileName"
                  value={edittingExporterFile.fileName}
                  type="text"
                  placeholder="FileName"
                  dark={changeTheme}
                  onChange={handleFileInfo}
                />
                <p> {type}</p>
              </FileInputbox>
              <Input
                onChange={handleFileInfo}
                value={edittingExporterFile.version}
                id="version"
                placeholder="version number 0.0.0"
              />
            </FileName>
          ) : (
            <FileName dark={changeTheme}>
              <FileInputbox>
                {"Helm chart  "}
                <Input
                  onChange={handleFileInfo}
                  value={edittingExporterFile.version}
                  id="version"
                  placeholder="version number 0.0.0"
                />
              </FileInputbox>
            </FileName>
          )}
          {sameFileName === "The same file name exists in same version" && (
            <Same>{sameFileName}</Same>
          )}
          {sameFileName === "Enter the file name." && (
            <Same>{sameFileName}</Same>
          )}
          {sameFileName === "Enter the version." && (
            <Same type={type} version="version">
              {sameFileName}
            </Same>
          )}
          {sameFileName ===
            "* A new file is created when the version number changes" && (
            <Same type={type} version="version" change="change">
              {sameFileName}
            </Same>
          )}
          {sameFileName === "The same version exists." && (
            <Same type={type}>{sameFileName}</Same>
          )}
          {type !== "_helm.yaml" && (
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
              rows="5"
              dark={changeTheme}
              onChange={handleFileInfo}
            />
          )}
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
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 5px 0px 5px;
  font-size: 20px;

  p {
    padding-left: 7px;
    color: ${(props) => (props.dark ? "#ffffff" : "#black")};
  }
`;

const Input = styled.input`
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    margin: 5px 0px;
  }
  width: ${(props) => (props.placeholder === "FileName" ? "400px" : "100%")};
  width: ${(props) =>
    props.placeholder === "version number 0.0.0" ? "200px" : "100%"};
  height: ${(props) => (props.as ? "" : "30px")};
  resize: ${(props) => (props.as ? "none" : "")};
  word-break: keep-all;
  margin: ${(props) => props.placeholder !== "FileName" && "10px 0px 15px"};
  margin: ${(props) =>
    props.placeholder === "version number 0.0.0" && "10px 0px 10px 15px"};
  border: ${(props) =>
    props.dark
      ? props.IsEdit
        ? "1px solid #69c4a6"
        : "1px solid #ffffff"
      : props.IsEdit
      ? "1px solid #69c4a6"
      : "1px solid rgba(0, 0, 0, 0.2)"};
  border-radius: 4px;
  padding-left: 5px;
  background-color: ${(props) => (props.dark ? "#18191a" : "#ffffff")};
  color: ${(props) => (props.dark ? "#ffffff" : "#black")};
  font-size: ${(props) => (props.placeholder === "FileName" ? "20px" : "15px")};
  letter-spacing: 0.08rem;
  outline: none;
`;

const FileInputbox = styled.div`
  display: flex;
  align-items: center;
`;

const Same = styled.p`
  width: 100%;
  color: ${({ change }) => (change === "change" ? "black" : "red")};
  margin: 0px 8px 10px 1px;
  text-align: ${({ version, type }) =>
    type !== "_helm.yaml" && version === "version" && "right"};
`;
