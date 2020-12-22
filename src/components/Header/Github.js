import React from "react";
import styled from "styled-components";

const Github = () => {
  return (
    <Div>
      <a href="https://github.com/NexClipper/exporterhub.io" target="_blank">
        <img src="assets/GitHub-Mark.png" alt="github" />
      </a>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 40px;
    object-fit: contain;
  }
`;
export default Github;
