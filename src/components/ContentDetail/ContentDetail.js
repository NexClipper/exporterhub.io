import { useState, useEffect } from "react";
import { useParams } from "react-router";
import remarkMarkdown from "./remarkMarkdown";
import axios from "axios";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { EXPORTER_API } from "../../config";

const ContentDetail = () => {
  const { id } = useParams();
  const [exporterInfo, setExporterInfo] = useState([]);

  useEffect(() => {
    axios.get(`${EXPORTER_API}/${id}`).then(res => {
      setExporterInfo(res.data);
    });
  }, []);
  const readmeContent = remarkMarkdown(exporterInfo.readme);
  return (
    <>
      <Header>
        <Container>
          <OpenSourceInfo>
            <HeaderLogo src={exporterInfo.logo_url} alt="오픈소스 로고" />
            <ListWrap>
              <List>
                <Name>{exporterInfo.name}</Name>
              </List>
              <List>
                <Category>{exporterInfo.category}</Category>
                <StarIcon>
                  <AiFillStar /> {exporterInfo.stars}
                </StarIcon>
              </List>
            </ListWrap>
          </OpenSourceInfo>
        </Container>
      </Header>
      <Main>
        <Container>
          <ReadmeTitle>README</ReadmeTitle>
          <MarkdownBody
            dangerouslySetInnerHTML={{ __html: readmeContent }}
          ></MarkdownBody>
        </Container>
      </Main>
    </>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

const Header = styled.header`
  min-height: 250px;
`;

const OpenSourceInfo = styled.div`
  position: relative;
  bottom: -50px;
  margin: 0 auto;
  max-width: 350px;

  @media ${({ theme }) => theme.media.mobile} {
    position: absolute;
    left: 50%;
    bottom: auto;
    transform: translateX(-50%);
    min-width: 300px;
  }
`;

const HeaderLogo = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.mobile} {
    width: 150px;
    height: 150px;
  }
`;

const ListWrap = styled.ul`
  margin-top: 30px;
  padding: 12px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 15px;
  }
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Name = styled.h4`
  font-size: 18px;
`;

const StarIcon = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #ffd200;

  svg {
    vertical-align: middle;
  }
`;

const Category = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #304d9a;
`;

const Main = styled.main`
  padding: 90px 0 50px;
  background: #f7f9fc;
  border-radius: 50px 0 0 0;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 90px 15px 50px;
    border-radius: 50px 50px 0 0;
  }
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

export default ContentDetail;
