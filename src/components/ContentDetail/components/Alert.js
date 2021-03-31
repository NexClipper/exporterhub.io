import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Dataviewer from "./Dataviewer";

const Alert = ({ title, githubToken }) => {
  const [githubContent, setGithubContent] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [sha, setSha] = useState();

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
    const url = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}.yaml`;

    axios
      .get(url)
      .then((res) => {
        setGithubContent(decodeURIComponent(escape(atob(res.data.content))));
        setSha(res.data.sha);
        console.log("github에서 코드 가져왔어!");
      })
      .catch((error) => {
        setGithubContent("Null");
      });
  };
  return (
    <Container>
      <Dataviewer
        githubContent={githubContent}
        isEditMode={isEditMode}
        handleMode={handleMode}
        title={title}
        type=".yaml"
        githubToken={githubToken}
        sha={sha}
      />
    </Container>
  );
};

export default Alert;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;
