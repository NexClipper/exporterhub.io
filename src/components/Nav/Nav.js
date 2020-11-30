import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [isOfficial, setIsOfficial] = useState(true);

  return (
    <Navigation>
      <Container>
        <Div>
          <Type onClick={() => setIsOfficial(true)} isOfficial={isOfficial}>
            Official
          </Type>
          <Type onClick={() => setIsOfficial(false)} isOfficial={!isOfficial}>
            Unofficial
          </Type>
        </Div>
      </Container>
    </Navigation>
  );
};

const Navigation = styled.nav`
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;
const Container = styled.section`
  ${({ theme }) => theme.container};
  display: flex;
  justify-content: flex-end;
  height: 50px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;
const Div = styled.div`
  width: ${({ theme }) => theme.width.content}px;
  display: flex;
`;
const Type = styled.button`
  width: 50%;
  height: 100%;
  ${({ theme }) => theme.flexCenter};
  color: ${props => (props.isOfficial ? "#32b489" : "black")};
  border-bottom: ${props => (props.isOfficial ? `2px solid #32b489` : "none")};
  cursor: pointer;
`;
export default Nav;
