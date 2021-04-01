import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Dataviewer from "./Dataviewer";
import remarkMarkdown from "../remarkMarkdown";
const Alert = ({ title, githubToken }) => {
  const [githubContent, setGithubContent] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [mdSha, setMdSha] = useState();
  const [fileSha, setFileSha] = useState();
  const handleMode = () => {
    setIsEditMode(!isEditMode);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [isEditMode]);
  const getData = () => {
    const mdUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}_alert.md`;
    const fileUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}_alert.yaml`;
    axios
      .get(
        mdUrl,
        {},
        {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        }
      )
      .then((res) => {
        setGithubContent(decodeURIComponent(escape(atob(res.data.content))));
        setMdSha(res.data.sha);
        console.log("github에서 코드 가져왔어!");
      })
      .catch((error) => {
        setGithubContent("Null");
      });
    axios
      .get(
        fileUrl,
        {},
        {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        }
      )
      .then((res) => {
        setFileSha(res.data.sha);
      })
      .catch((error) => {
        console.log("file Alert Sha error");
        console.log(error);
      });
  };

  const markDownContent = remarkMarkdown(githubContent);

  return (
    <Container>
      <Dataviewer
        githubContent={githubContent}
        markDownContent={markDownContent}
        isEditMode={isEditMode}
        handleMode={handleMode}
        title={title}
        // type="_alert.yaml"
        file=".yaml"
        type="_alert"
        githubToken={githubToken}
        mdSha={mdSha}
      />
    </Container>
  );
};
export default Alert;
const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;
