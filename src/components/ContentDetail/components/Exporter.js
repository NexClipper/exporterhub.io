import React from "react";
import remarkMarkdown from "../remarkMarkdown";
import styled from "styled-components";

const Exporter = ({ readmeContent }) => {
  const content = remarkMarkdown(readmeContent);

  return (
    <Container>
      <ReadmeTitle>README</ReadmeTitle>
      <MarkdownBody
        dangerouslySetInnerHTML={{ __html: content }}
      ></MarkdownBody>
    </Container>
  );
};

export default Exporter;

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

const MarkdownBody = styled.div`
  * {
    line-height: 1.8;
  }

  code {
    margin: 0;
    padding: 0.2em 0.4em;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 6px;
    font-size: 13px;
    font-family: "Noto Sans KR", sans-serif;
  }

  pre {
    margin-bottom: 16px;
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    background-color: #f0f4f8;
    border-radius: 6px;
    font-size: 13px;

    tt,
    code {
      background-color: #f0f4f8;
      line-height: 1.6;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 24px 0 16px;
    line-height: 1.25;
  }

  h1,
  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 500;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.25em;
    font-weight: 400;
  }

  p {
    margin-bottom: 16px;
    font-size: 15px;
  }

  blockquote {
    padding: 0 1em;
    border-left: 0.25em solid #dfe2e5;
    color: #6a737d;
  }

  ul {
    margin-bottom: 16px;
    padding-left: 2em;
    list-style-type: disc;

    li {
      line-height: 2;
    }
  }

  img {
    max-width: 100%;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }
`;
