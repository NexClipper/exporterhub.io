import { useSelector } from "react-redux";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { BiUndo } from "react-icons/bi";
import CodeEditor from "./CodeEditor";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Dataviewer = ({
  githubContent,
  isEditMode,
  handleMode,
  title,
  type,
  file,
  mdSha,
  codeSha,
  markDownContent,
}) => {
  const isAdmin = useSelector((store) => store.adminReducer);
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  console.log("hi");
  !markDownContent && console.log("YES");
  const editBtnText = mdSha ? "Edit" : "Create";
  return (
    <>
      <Header>
        <ContentTitle dark={changeTheme}>
          {title}
          {type}
          {file}
        </ContentTitle>
        {isAdmin && markDownContent && (
          <Button onClick={handleMode}>
            <span>{!isEditMode ? <FiEdit /> : <BiUndo />}</span>
            <span>{!isEditMode ? editBtnText : "Back"}</span>
          </Button>
        )}
      </Header>
      <ContentBody>
        {!isEditMode ? (
          <Data>
            <MarkdownBody dark={changeTheme}>
              <Content
                dangerouslySetInnerHTML={{ __html: markDownContent }}
              ></Content>
            </MarkdownBody>
            {!markDownContent && (
              <Loading>
                <AiOutlineLoading3Quarters className="spinner" />
              </Loading>
            )}
          </Data>
        ) : (
          <CodeEditor
            githubContent={githubContent}
            mdSha={mdSha}
            codeSha={codeSha}
            handleMode={handleMode}
            title={title}
            type={type}
            file={file}
          />
        )}
      </ContentBody>
    </>
  );
};
export default Dataviewer;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;
const ContentTitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
<<<<<<< HEAD

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 18px;
    padding-left: 10px;
  }
=======
  color: ${(props) => props.dark && "#f5f6f7"}; ;
>>>>>>> dev
`;
const ContentBody = styled.div``;
const Data = styled.pre`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: black;
  padding: 30px;
  border-radius: 5px;
  /* background-color: #f1f4f8; */
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 30px;
  background: #ffffff;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  span {
    font-size: 12px;
    &:first-child {
      position: relative;
      top: 1px;
      margin-right: 5px;
      font-size: 13px;
    }
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const MarkdownBody = styled.div`
  * {
    line-height: 1.8;
  }
  a {
    color: ${(props) => props.dark && "#00a7ee"};
  }

  code {
    margin: 0;
    padding: 0.2em 0.4em;
    background-color: ${(props) => (props.dark ? "#242526" : "#f0f4f8")};
    border-radius: 6px;
    font-size: 13px;
    font-family: "Noto Sans KR", sans-serif;
    color: ${(props) => props.dark && "#f5f6f7"};
  }
  pre {
    margin-bottom: 16px;
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    background-color: ${(props) => (props.dark ? "#242526" : "#f0f4f8")};
    border-radius: 6px;
    font-size: 13px;
    /* color: ${(props) => props.dark && "red"}; */
    tt,
    code {
      background-color: ${(props) => (props.dark ? "#242526" : "#f0f4f8")};
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
    color: ${(props) => props.dark && "#f5f6f7"};
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
    color: ${(props) => props.dark && "#f5f6f7"};
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
      color: ${(props) => props.dark && "#f5f6f7"};
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
const Loading = styled.div`
  text-align: center;
  font-size: 13px;
  margin-top: 20px;
  .spinner {
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
