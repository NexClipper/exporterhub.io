import React from "react";
import styled from "styled-components";

const NoData = ({ mdSha }) => {
  return (
    <NoDataContainer active={!mdSha}>
      <Notice>
        The page has not been ready to show up for about this configuration.
        Please contributing to open-source for our future via below URL.
      </Notice>
      <Link
        href="https://github.com/NexClipper/exporterhub.io/tree/main/contents"
        target="_blank"
        rel="noreferrer"
      >
        https://github.com/NexClipper/exporterhub.io/tree/main/contents
      </Link>
    </NoDataContainer>
  );
};

export default NoData;

const NoDataContainer = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  background-color: #f0f4f8;
  border-radius: 6px;
  padding: 10px 16px 16px 16px;
  width: 100%;
  overflow: auto;
`;

const Notice = styled.p`
  font-size: 15px;
  line-height: 40px;
  margin-bottom: 10px;
  word-break: keep-all;
`;

const Link = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: #6ac4a5;
  word-break: break-all;
`;
