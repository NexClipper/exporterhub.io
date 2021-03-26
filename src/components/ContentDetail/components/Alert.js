import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Dataviewer from "./Dataviewer";

const Alert = () => {
  const [data, setData] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  const handleMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url =
      "https://api.github.com/repos/NexClipper/exporterhub.io/contents/docker-compose.yml";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        alert("fail");
      });
  };
  return (
    <Container>
      {data && (
        <Dataviewer
          data={data}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          handleMode={handleMode}
        />
      )}
    </Container>
  );
};

export default Alert;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;
