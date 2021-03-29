import React from "react";
import styled from "styled-components";

const Permission = () => {
  return (
    <Container>
      <ReadmeTitle>Permission</ReadmeTitle>
    </Container>
  );
};

export default Permission;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

const ReadmeTitle = styled.h4`
  margin-bottom: 45px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
`;
