import React from "react";
import styled from "styled-components";

const Resister = () => {
  return (
    <Container>
      <ReadmeTitle>Resister</ReadmeTitle>
    </Container>
  );
};

export default Resister;

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
