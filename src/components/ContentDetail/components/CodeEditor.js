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
  file,
  githubToken,
  mdSha,
  fileSha,
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

  const filter = (content) => {
    const test = content;

    const codeBlock = "```";

    const start = test.indexOf(codeBlock) + 3;
    const last = test.lastIndexOf(codeBlock);

    test.indexOf(codeBlock);

    return test.slice(start, last);
  };

  const fetchCodeBlock = (blockEncode, codeUrl, wholeEncode, mdUrl) => {
    axios
      .put(
        codeUrl,
        {
          sha: fileSha,
          message: "put method test",
          content: blockEncode,
        },
        {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        }
      )
      .then((res) => {
        console.log("codeUrl SUCCESS", res);
      })
      .then(() => {
        fetchMarkDown(wholeEncode, mdUrl);
        handleMode();
      })
      .catch((error) => {
        console.log(error);
        console.log("실패");
      });
  };

  const fetchMarkDown = (wholeEncode, mdUrl) => {
    console.log("fetchMarkDown 함수 호출됨");
    axios
      .put(
        mdUrl,
        {
          sha: mdSha,
          message: "put method test",
          content: wholeEncode,
        },
        {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        }
      )
      .then((res) => {
        console.log("mdUrl SUCCESS", res);
        handleMode();
      })
      .catch((error) => {
        console.log(error);
        console.log("md PUT실패");
      });
  };

  console.log("type", type);
  console.log("file", file);

  const handlefetchGithub = () => {
    // const encode = btoa(edittingData);
    const codeblock = filter(edittingData);
    const blockEncode = btoa(unescape(encodeURIComponent(codeblock)));
    const wholeEncode = btoa(unescape(encodeURIComponent(edittingData)));
    const codeUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}${type}${file}`;
    const mdUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}${type}.md`;

    //codeblock
    console.log("codeblock");
    fetchCodeBlock(blockEncode, codeUrl, wholeEncode, mdUrl);

    //wholeCode
    console.log("wholeCode");
    // fetchMarkDown(wholeEncode, mdUrl);
  };
  const markDownContent = remarkMarkdown(preview);

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
          <MarkdownBody>
            <Content
              dangerouslySetInnerHTML={{ __html: markDownContent }}
            ></Content>
          </MarkdownBody>
          {/* <Content dangerouslySetInnerHTML={{ __html: preview }}></Content> */}
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

const MarkdownBody = styled.div`
  * {
    line-height: 1.8;
  }

  code {
    margin: 0;
    padding: 0.2em 0.4em;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 6px;
    font-size: 13px;
    font-family: "Noto Sans KR", sans-serif;
  }

  pre {
    margin-bottom: 16px;
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    background-color: #f0f4f8;
    border-radius: 6px;
    font-size: 13px;

    tt,
    code {
      background-color: #f0f4f8;
      line-height: 1.6;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 24px 0 16px;
    line-height: 1.25;
  }

  h1,
  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 500;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.25em;
    font-weight: 400;
  }

  p {
    margin-bottom: 16px;
    font-size: 15px;
  }

  blockquote {
    padding: 0 1em;
    border-left: 0.25em solid #dfe2e5;
    color: #6a737d;
  }

  ul {
    margin-bottom: 16px;
    padding-left: 2em;
    list-style-type: disc;

    li {
      line-height: 2;
    }
  }

  img {
    max-width: 100%;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }
`;
