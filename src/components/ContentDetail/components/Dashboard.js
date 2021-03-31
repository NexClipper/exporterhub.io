import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Dataviewer from "./Dataviewer";

const Dashboard = ({ title }) => {
  const [content, setContent] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  const handleMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url = `https://api.github.com/repos/Exporterhubv3/editor_test/contents/${title}/${title}.json`;
    // const url = `https://api.github.com/repos/NexClipper/exporterhub.io/contents/package.json`;
    axios
      .get(url)
      .then((res) => {
        setContent(atob(res.data.content));
      })
      .catch((error) => {
        setContent("Null");
      });
  };
  return (
    <Container>
      <Dataviewer
        content={content}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        handleMode={handleMode}
        title={title}
        type=".json"
      />
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;
