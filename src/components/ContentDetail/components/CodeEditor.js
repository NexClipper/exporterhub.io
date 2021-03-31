import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";
// import "./App.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import axios from "axios";
import { HiOutlineSave } from "react-icons/hi";
//md test
import remarkMarkdown from "../remarkMarkdown";

const CodeEditor = ({
  githubContent,
  title,
  type,
  githubToken,
  sha,
  handleMode,
}) => {
  const [preview, setPreview] = useState();
  const [edittingData, setEdittingData] = useState();

  const [decode, setDecode] = useState();
  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    setEdittingData(githubContent);
    setPreview(githubContent);
  }, []);
  const onChange = (value) => {
    setEdittingData(value);
    setPreview(value);

    // setDecode(btoa(value));
    setDecode(btoa(unescape(encodeURIComponent(value))));
  };

  const handleReadOnly = () => {
    setReadOnly(!readOnly);
  };

  const handlefetchGithub = () => {
    // const encode = btoa(edittingData);
    const encode = btoa(unescape(encodeURIComponent(edittingData)));
    const url = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}${type}`;
    axios
      .put(
        url,
        {
          sha: sha,
          message: "put method test",
          content: encode,
        },
        {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        }
      )
      .then((res) => {
        console.log("응답뭐래 ? >>>", res);
        handleMode();
      })
      .catch((error) => {
        console.log(error);
        console.log("실패");
      });
  };
  const markDownContent = remarkMarkdown(decode);

  return (
    <Container>
      <Button onClick={handlefetchGithub}>
        <span>
          <HiOutlineSave />
        </span>
        <span>Save</span>
      </Button>
      {/* <button onClick={handlefetchGithub}>누르면 보내짐ㅋㅋ</button> */}
      <EditorContainer>
        {/* <button onClick={handleReadOnly}>edit</button>
      <button onClick={handlefetchGithub}>save/send</button> */}
        <AceEditor
          // readOnly={readOnly}
          disabled
          placeholder="Add your code!"
          mode="json"
          // theme="tomorrow"
          name="blah2"
          // onLoad={this.onLoad}
          onChange={onChange}
          fontSize={15}
          showPrintMargin={true}
          showGutter={false}
          highlightActiveLine={true}
          value={edittingData}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false,
            enableSnippets: true,
            showLineNumbers: false,
            tabSize: 2,
          }}
          width="50%"
          height="100vh"
        />
        <Preview className="code">
          {/* <Content
            dangerouslySetInnerHTML={{ __html: markDownContent }}
          ></Content> */}
          <Content dangerouslySetInnerHTML={{ __html: preview }}></Content>
        </Preview>
      </EditorContainer>
    </Container>
  );
};
export default CodeEditor;

const Container = styled.div`
  position: relative;
`;

const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  /* height: 300px; */
`;

const Preview = styled.pre`
  width: 50%;
  /* height: 300px; */
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Button = styled.button`
  position: absolute;
  top: -75px;
  right: 80px;
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
