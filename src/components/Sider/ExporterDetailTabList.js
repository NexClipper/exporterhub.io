import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { TiPencil } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import DeleteModal from "../Modal/DeleteModal";
import { API_SURVER } from "../../config";
import { set } from "js-cookie";

const ExporterDetailTabList = ({
  setExporterCsv,
  modify,
  id,
  type,
  exporterCsv,
  setSelect,
  select,
  isEditMode,
  setModify,
  handleMode,
  mobile,
}) => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const edittingFile = useSelector((store) => store.exporterTabEdittingReducer);
  const beforeEditFile = useSelector(
    (store) => store.exporterTabBeforeEditReducer
  );
  const [saveEdit, setSaveEdit] = useState(false);
  const [moveId, setMoveId] = useState(false);
  const [deleteFile, setDeleteFile] = useState(false);
  const dontSaved =
    modify && JSON.stringify(edittingFile) !== JSON.stringify(beforeEditFile);
  const handleFileAdd = () => {
    if (exporterCsv.length !== 0) {
      if (select === "New") {
        setSelect(exporterCsv[0].file_id);
        setModify(false);
      } else {
        setSelect("New");
        setModify(true);
      }
    } else {
      if (select === "New") {
        setSelect(0);
        setModify(false);
      } else {
        setSelect("New");
        setModify(true);
      }
    }
  };

  const handleSaveModal = () => {
    if (dontSaved) {
      setSaveEdit(true);
      setMoveId("New");
    } else {
      handleFileAdd();
    }
  };

  const handleSave = (answer) => {
    if (answer === "Yes") {
      if (moveId === "New") {
        handleFileAdd();
      } else {
        setSelect(moveId);
        setModify(false);
      }
    }
    setSaveEdit(false);
  };

  const handleDeleteAnswer = (answer) => {
    if (answer === "Yes") {
      setExporterCsv("default");
      handleDelete();
    } else {
      setDeleteFile(false);
    }
  };

  const handleDelete = () => {
    const fileType = type.slice(1, type.lastIndexOf("."));
    axios({
      method: "DELETE",
      url: `${API_SURVER}/exporter/${id}/tab?type=${fileType}&file_id=${select}`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then(() => {
        handleMode();
      })
      .catch((err) => {
        handleMode();
        console.log(err);
      });

    //response 오면 실행
    handleMode();
    exporterCsv.length !== 0 ? setSelect(exporterCsv[0].file_id) : setSelect(0);
    setDeleteFile(false);
  };

  const handleChangeFile = (fileId) => {
    if (dontSaved) {
      setMoveId(fileId);
      setSaveEdit(true);
    } else {
      setSelect(fileId);
      setModify(false);
    }
  };

  return (
    <>
      <Title dark={changeTheme}>
        ALERTING RULE
        {isEditMode && mobile && (
          <Category
            dark={changeTheme}
            addIcon={true}
            isEditMode={isEditMode}
            onClick={handleSaveModal}
          >
            <FiPlus size={mobile ? "20px" : "30px"} />
          </Category>
        )}
      </Title>
      {exporterCsv === "default" ? (
        <Loading>
          <AiOutlineLoading3Quarters className="spinner" />
        </Loading>
      ) : (
        <CategoryBox>
          <div>
            {/* {exporterCsv.length !== 0
              ? exporterCsv.map((file) => {
                  let github = file.file_url.slice(
                    file.file_url.lastIndexOf("/") + 1,
                    file.file_url.lastIndexOf("_")
                  );
                  return (
                    <Category
                      active={file.file_id === select}
                      dark={changeTheme}
                      isEditMode={isEditMode}
                      key={file.file_id}
                      title={file.file_url.slice(
                        file.file_url.lastIndexOf("/") + 1
                      )}
                    >
                      <Div
                        active={file.file_id === select}
                        dark={changeTheme}
                        fileName={isEditMode && file.file_id === select}
                        onClick={() => handleChangeFile(file.file_id)}
                      >
                        {github}
                      </Div>

                      {isEditMode && file.file_id === select && (
                        <EditBox>
                          <TiPencil
                            className="edit"
                            onClick={() => setModify(true)}
                          />
                          <RiDeleteBin6Line
                            className="edit"
                            onClick={() => {
                              setDeleteFile(true);
                            }}
                          />
                        </EditBox>
                      )}
                    </Category>
                  );
                })
              : select !== "New" && (
                  <Category>
                    <Div dark={changeTheme}>"준비중"</Div>
                  </Category>
                )} */}

            {isEditMode && select === "New" && (
              <Category
                dark={changeTheme}
                isEditMode={isEditMode}
                active={"New" === select}
              >
                <Div active={"New" === select} dark={changeTheme}>
                  New !
                </Div>
              </Category>
            )}
          </div>
          {isEditMode && !mobile && (
            <Category
              addIcon={true}
              isEditMode={isEditMode}
              onClick={handleSaveModal}
            >
              <FiPlus size={!mobile && "30px"} />
            </Category>
          )}
        </CategoryBox>
      )}
      {saveEdit && (
        <DeleteModal
          handleDelete={handleSave}
          content="Don't you want to save the changes you made?"
        ></DeleteModal>
      )}
      {deleteFile && (
        <DeleteModal
          handleDelete={handleDeleteAnswer}
          content="Are you sure Delete?"
        ></DeleteModal>
      )}
    </>
  );
};
export default ExporterDetailTabList;

const Title = styled.li`
  display: flex;
  padding: 10px;
  color: ${({ dark }) => (dark ? "#f5f6f7" : "#999")};
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    font-size: 15px;
    padding: 0px 3px 0px 10px;
    color: ${({ dark }) => (dark ? "#f5f6f7" : "black")};
  }
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  @media ${({ theme }) => theme.media.mobile} {
    min-height: auto;
    padding-bottom: 60px;
  }
`;

const Category = styled.li`
  display: ${({ isEditMode }) => isEditMode && "flex"};
  align-items: ${({ isEditMode }) => isEditMode && "center"};
  justify-content: ${({ isEditMode }) => isEditMode && "space-between"};
  display: flex;
  justify-content: ${({ addIcon }) => addIcon && "center"};
  margin-left: 0px;
  position: relative;
  background: ${({ active }) => active && "#eee"};
  cursor: pointer;
  color: ${(props) => (props.dark ? "#f5f6f7" : "#999")};
  color: ${({ active }) => active && "black"};

  @media ${({ theme }) => theme.media.mobile} {
    justify-content: start;
    margin-left: ${({ addIcon }) => (addIcon ? "5px" : "24px")};
    color: ${(props) => (props.dark ? "#f5f6f7" : "#black")};
    background: transparent;
  }

  &:hover {
    background: #eee;
    color: black;
    @media ${({ theme }) => theme.media.mobile} {
      background: transparent;
      color: ${(props) => (props.dark ? "#f5f6f7" : "#black")};
    }
  }

  &:after {
    content: "";
    display: ${({ active }) => active && "block"};
    width: 13px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: ${({ active, isEditMode }) =>
      !isEditMode && active
        ? "url(/images/category_arrow.png) no-repeat center"
        : ""};
    background-size: 13px 10px;
    @media ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;

const Div = styled.div`
  flex: 8;
  padding: ${(props) =>
    props.fileName ? "3px 5px 3px 10px" : "3px 30px 3px 10px"};
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${({ theme }) => theme.media.mobile} {
    flex: none;
    font-size: 13px;
    padding: 0;
    border-bottom: ${({ dark, active }) =>
      active ? (dark ? "1px solid #f5f6f7" : "1px solid black") : ""};
  }
`;

const EditBox = styled.div`
  display: flex;
  flex: 2;
  .edit {
    margin-right: 3px;
    flex: 1;
  }
  @media ${({ theme }) => theme.media.mobile} {
    flex: none;
    font-size: 15px;
    margin-left: 5px;
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
