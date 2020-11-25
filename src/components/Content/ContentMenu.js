import React from "react";
import styled from "styled-components";

const ContentMenu = ({ totalCount }) => {
  return (
    <Section>
      <span>{totalCount} items</span>
      <select>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>
    </Section>
  );
};

const Section = styled.section`
  width: 870px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 20px;
  select {
    outline: none;
    border: none;
  }
`;
export default ContentMenu;
