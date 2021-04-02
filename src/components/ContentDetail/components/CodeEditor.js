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
import { SERVER } from "../../../config";
import { useParams } from "react-router";

const CodeEditor = ({
  githubContent,
  mdSha,
  codeSha,
  handleMode,
  title,
  type,
  file,
}) => {
  const { id } = useParams();
  const [preview, setPreview] = useState();
  const [edittingData, setEdittingData] = useState();

  const [decode, setDecode] = useState();
  const [readOnly, setReadOnly] = useState(true);

  const githubToken = "밑에 변수때매,, 백엔드 통신하고 지울거야";

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

  const filter = (content) => {
    const test = content;

    const codeBlock = "```";

    const start = test.indexOf(codeBlock) + 3;
    const last = test.lastIndexOf(codeBlock);

    test.indexOf(codeBlock);

    return test.slice(start, last);
  };

  // const fetchCodeBlock = (blockEncode, codeUrl, wholeEncode, mdUrl) => {
  //   axios
  //     .put(
  //       codeUrl,
  //       {
  //         sha: fileSha,
  //         message: "put method test",
  //         content: blockEncode,
  //       },
  //       {
  //         headers: {
  //           Authorization: `token ${githubToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("codeUrl SUCCESS", res);
  //     })
  //     .then(() => {
  //       fetchMarkDown(wholeEncode, mdUrl);
  //       handleMode();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("실패");
  //     });
  // };

  // const fetchMarkDown = (wholeEncode, mdUrl) => {
  //   console.log("fetchMarkDown 함수 호출됨");
  //   axios
  //     .put(
  //       mdUrl,
  //       {
  //         sha: mdSha,
  //         message: "put method test",
  //         content: wholeEncode,
  //       },
  //       {
  //         headers: {
  //           Authorization: `token ${githubToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("mdUrl SUCCESS", res);
  //       handleMode();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("md PUT실패");
  //     });
  // };

  const handlefetchGithub = () => {
    console.log("비교", edittingData === githubContent);

    const codeblock = filter(edittingData);
    const blockEncode = btoa(unescape(encodeURIComponent(codeblock)));
    const wholeEncode = btoa(unescape(encodeURIComponent(edittingData)));

    const body = {
      codeFileName: `${title}${type}${file}`,
      codeBlock: blockEncode,
      "code-SHA": codeSha,
      mdFileName: `${title}${type}.md`,
      mdFile: wholeEncode,
      "md-SHA": mdSha,
      message:
        mdSha === null ? `CREATE ${title}${type}` : `UPDATE ${title}${type}`,
    };

    axios({
      method: "POST",
      url: `${SERVER}/exporter/${id}/tab`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
      data: {
        codeFileName: `${title}${type}${file}`,
        codeBlock: blockEncode,
        "code-SHA": codeSha,
        mdFileName: `${title}${type}.md`,
        mdFile: wholeEncode,
        "md-SHA": mdSha,
        message:
          mdSha === null ? `CREATE ${title}${type}` : `UPDATE ${title}${type}`,
      },
    })
      .then(() => {
        console.log("SUCCESS : PUT");
        handleMode();
      })
      .catch((err) => {
        console.log("ERROR : PUT");
        console.log(err);
        handleMode();
      });

    console.log(body);
  };

  // const handlefetchGithub = () => {
  //   // const encode = btoa(edittingData); 주석
  //   const codeblock = filter(edittingData);
  //   const blockEncode = btoa(unescape(encodeURIComponent(codeblock)));
  //   const wholeEncode = btoa(unescape(encodeURIComponent(edittingData)));
  //   const codeUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}${type}${file}`;
  //   const mdUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}${type}.md`;

  //   //codeblock 주석
  //   console.log("codeblock");
  //   fetchCodeBlock(blockEncode, codeUrl, wholeEncode, mdUrl);

  //   //wholeCode 주석
  //   console.log("wholeCode");
  //   // fetchMarkDown(wholeEncode, mdUrl); 주석
  // };

  const markDownContent = remarkMarkdown(preview);

  return (
    <Container>
      <Button onClick={handlefetchGithub}>
        <span>
          <HiOutlineSave />
        </span>
        <span>Save</span>
      </Button>
      <EditorContainer>
        <AceEditor
          disabled
          placeholder="Add your code!"
          mode="javascript"
          theme="dracula"
          name="blah2"
          // onLoad={this.onLoad}
          onChange={onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={false}
          highlightActiveLine={true}
          value={edittingData}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: false,
            tabSize: 2,
          }}
          width="50%"
          height="800px"
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
  padding: 10px;
  background-color: white;
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
  /* margin-left: 15px; */
  padding-left: 10px;
  padding-top: 0;
  border-radius: 3px;
  background-color: white;
  height: 800px;

  * {
    line-height: 1.3;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  code {
    margin: 0;
    padding: 0.2em 0.4em;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 6px;
    font-size: 13px;
    /* font-family: "Noto Sans KR", sans-serif; */
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
    margin: 0 0 16px;
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
    font-size: 16px;
    font-weight: 500;

    & > p {
      margin-bottom: 0;
    }
  }

  ul {
    margin-bottom: 16px;
    padding-left: 2em;
    list-style-type: disc;

    li {
      line-height: 1.5;
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

  a {
    color: #6fc6a8;
    font-weight: 500;
  }
`;
