import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";
// import "./App.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import axios from "axios";
//md test
import remarkMarkdown from "../remarkMarkdown";

const CodeEditor = ({ content, title, type }) => {
  const [data, setData] = useState();
  const [decode, setDecode] = useState();
  const [readOnly, setReadOnly] = useState(true);
  const [newData, setNewData] = useState();
  const [sha, setSha] = useState();
  useEffect(() => {
    setData(content);
    setDecode(content);
    // axios({
    //   method: "get",
    //   url:
    //     // 'https://api.github.com/repos/yoosaemsol/exporterhub.io/contents/package.json',
    //     "https://api.github.com/repos/yoosaemsol/westagram-test/contents/package.json",
    // }).then((res) => {
    //   setDecode(atob(res.data.content));
    //   setSha(res.data.sha);
    // });
  }, []);
  const onChange = (value) => {
    setData(value);
    console.log(value);
    // console.log(btoa(value));
    setDecode(btoa(value));
    // setNewData(btoa(value));
    setNewData(value);
    // console.log(newData);
  };
  const handleReadOnly = () => {
    setReadOnly(!readOnly);
  };
  const handlefetchGithub = () => {
    console.log(newData);
    const url = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}${type}`;
    axios
      .put(
        url,
        {
          // owner: "yoosaemsol",
          // repo: "github-test",
          // path: "/test.yaml",
          // sha: 'e947631b744a1462950a50b687ae33124110ec11',
          message: "put method test",
          content: decode,
          // author: {
          //   name: "93jm",
          //   email: "mjuikl7588@gmail.com",
          // },
          // branch: "main",
        },
        {
          headers: {
            // accept: "application/vnd.github.v3+json",
            Authorization: "token 16a2c4235c37a63e022c2c755bf1f2fa77142127",
          },
        }
      )
      .then((res) => {
        console.log("응답뭐래 ? >>>", res);
      })
      .catch((error) => {
        console.log("실패");
      });
  };
  const markDownContent = remarkMarkdown(decode);
  return (
    <>
      <button onClick={handlefetchGithub}>누르면 보내짐ㅋㅋ</button>
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
          value={data}
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
          <Content
            dangerouslySetInnerHTML={{ __html: markDownContent }}
          ></Content>
        </Preview>
      </EditorContainer>
    </>
  );
};
export default CodeEditor;

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
