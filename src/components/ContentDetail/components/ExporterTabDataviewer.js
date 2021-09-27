import { useSelector } from "react-redux";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { BiUndo } from "react-icons/bi";
import ExporterTabCodeEditor from "./ExporterTabCodeEditor";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoEllipseSharp } from "react-icons/io5";
import NoData from "./NoData";
import { Fragment } from "react";
const ExporterTabDataviewer = ({
  modify,
  handleMode,
  title,
  type,
  setIsEditMode,
  isEditMode,
  exporterCsv,
  select,
  setModify,
  setExporterCsv,
}) => {
  const isAdmin = useSelector((store) => store.adminReducer);
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const emty = exporterCsv !== "default" ? exporterCsv.length === 0 : false;
  const selectFileInfo =
    select !== "New" && exporterCsv !== "default" && exporterCsv.length !== 0
      ? exporterCsv.filter((file) => file.file_id === select)
      : exporterCsv !== "default" && exporterCsv.length !== 0
      ? [
          {
            file_content: "",
            file_url: "",
            file_sha: exporterCsv[0].file_sha,
            csv_sha: exporterCsv[0].csv_sha,
            file_id: "",
            csv_desc: "",
          },
        ]
      : [
          {
            file_content: "",
            file_url: "",
            file_sha: "",
            csv_sha: "",
            file_id: "",
            csv_desc: "",
          },
        ];
  return (
    <>
      <Header>
        <ContentTitle dark={changeTheme}>
          {title}
          {type}
        </ContentTitle>

        {isAdmin && (
          <div>
            <Button
              onClick={() => {
                setIsEditMode((prev) => !prev);
                setModify(false);
              }}
            >
              <span>{!isEditMode ? <FiEdit /> : <BiUndo />}</span>
              <span>{!isEditMode ? "edit" : "Back"}</span>
            </Button>
          </div>
        )}
      </Header>

      <div>
        {!modify ? (
          <Data dark={changeTheme}>
            {exporterCsv === "default" ? (
              <Loading>
                <AiOutlineLoading3Quarters className="spinner" />
              </Loading>
            ) : (
              <Fragment>
                {emty === false && selectFileInfo.length !== 0 ? (
                  <ExporterContainer>
                    <h1>
                      {selectFileInfo[0].file_url.slice(
                        selectFileInfo[0].file_url.lastIndexOf("/") + 1
                      )}
                    </h1>
                    <div>
                      <h3>Description</h3>
                      <p>
                        <Symbol />
                        {selectFileInfo[0].csv_desc}
                      </p>
                    </div>
                    <Content dark={changeTheme}>
                      {selectFileInfo[0].file_content}
                    </Content>
                  </ExporterContainer>
                ) : (
                  <NoData mdSha={!emty} />
                )}
              </Fragment>
            )}
          </Data>
        ) : (
          <ExporterTabCodeEditor
            setExporterCsv={setExporterCsv}
            type={type}
            fileName={selectFileInfo[0].file_url.slice(
              selectFileInfo[0].file_url.lastIndexOf("/") + 1
            )}
            exporterCsv={exporterCsv}
            setModify={setModify}
            fileDescription={selectFileInfo[0].csv_desc}
            fileContent={selectFileInfo[0].file_content}
            fileSha={selectFileInfo[0].file_sha}
            csvSha={selectFileInfo[0].csv_sha}
            fileId={selectFileInfo[0].file_id}
            handleMode={handleMode}
          />
        )}
      </div>
    </>
  );
};
export default ExporterTabDataviewer;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ContentTitle = styled.h1`
  margin: 15px 0 0pxpx;
  line-height: 1.25;
  font-weight: 500;
  color: ${(props) => props.dark && "#f5f6f7"};
  letter-spacing: 0.08rem;
  font-size: 25px;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 18px;
    padding-right: 3px;
    padding-left: 10px;
    width: min-content;
    line-height: 1.2;
  }
  color: ${(props) => props.dark && "#f5f6f7"}; ;
`;

const ExporterContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  h1 {
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #eaecef;

    letter-spacing: 0.08rem;
    @media ${({ theme }) => theme.media.mobile} {
      font-size: 17px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 10px;
    @media ${({ theme }) => theme.media.mobile} {
      font-size: 15px;
    }
  }

  p {
    margin: auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaecef;
    white-space: normal;
    font-size: 16px;
    margin-bottom: 20px;

    @media ${({ theme }) => theme.media.mobile} {
      font-size: 13px;
    }
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding-right: 3px;
    padding-left: 10px;
    line-height: 1.2;
  }
`;

const Data = styled.pre`
  color: ${(props) => props.dark && "#f5f6f7"};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding-top: 30px;
  border-radius: 5px;
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

  @media ${({ theme }) => theme.media.mobile} {
    padding: 0 2px;
  }
`;

const Content = styled.div`
  background-color: ${(props) => (props.dark ? "#242526" : "#f0f4f8")};
  color: ${(props) => props.dark && "#f5f6f7"};
  width: 100%;
  height: 100%;
  overflow: auto;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
    min-height: 200px;
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

const Symbol = styled(IoEllipseSharp)`
  font-size: 7px;
`;
