import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Dataviewer from "./Dataviewer";
import remarkMarkdown from "../remarkMarkdown";
import { useParams } from "react-router";
import { SERVER } from "../../../config";

const Dashboard = ({ title }) => {
  const { id } = useParams();
  const [githubContent, setGithubContent] = useState();
  const [mdSha, setMdSha] = useState();
  const [codeSha, setCodeSha] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

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
    const TOKEN = sessionStorage.getItem("access_token");
    const HEADER = TOKEN && { Authorization: TOKEN };

    axios({
      method: "GET",
      url: `${SERVER}/exporter/${id}/tab?type=dashboard`,
      headers: HEADER,
    })
      .then((res) => {
        setGithubContent(
          res.data.md_content === null ? "null" : res.data.md_content
        );
        setMdSha(res.data.md_sha);
        setCodeSha(res.data.code_sha);
      })
      .catch((err) => {
        console.log(err);
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
        file=".json"
        type="_dashboard"
        mdSha={mdSha}
        codeSha={codeSha}
      />
    </Container>
  );
};
export default Dashboard;
const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;
