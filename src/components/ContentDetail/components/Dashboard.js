import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Dataviewer from "./Dataviewer";
import remarkMarkdown from "../remarkMarkdown";

const Dashboard = ({ title, githubToken }) => {
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
  console.log(title);

  const getData = () => {
    const mdUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}_dashboard.md`;
    const fileUrl = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}_dashboard.json`;
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
        console.log("file Dashboard Sha error");
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
        // type="_dashboard.json"
        file=".json"
        type="_dashboard"
        githubToken={githubToken}
        mdSha={mdSha}
        fileSha={fileSha}
      />
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;
