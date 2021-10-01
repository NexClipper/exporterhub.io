import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { TiPencil } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import {
  RiDeleteBin6Line,
  RiFolderTransferLine,
  RiFolderDownloadLine,
} from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import DeleteModal from "../Modal/DeleteModal";
import { API_SURVER } from "../../config";
import { set } from "js-cookie";
import { Fragment, useState, useEffect } from "react";

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
  moveId,
  setMoveId,
  deleteFile,
  setDeleteFile,
  target,
  setTarget,
}) => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const edittingFile = useSelector((store) => store.exporterTabEdittingReducer);
  const beforeEditFile = useSelector(
    (store) => store.exporterTabBeforeEditReducer
  );
  const [saveEdit, setSaveEdit] = useState(false);

  const uni = () => {
    let versions = [];
    for (let i in exporterCsv) {
      versions.push(exporterCsv[i].version);
    }
    let uniqueVersion = Array.from(new Set(versions));
    return uniqueVersion;
  };

  const fil = () => {
    let list = [];
    list =
      exporterCsv !== "default" &&
      exporterCsv.filter((file) => file.version === target);

    return list;
  };

  const versionValue = uni();
  const fileName_version = fil(versionValue);

  const dontSaved =
    modify && JSON.stringify(edittingFile) !== JSON.stringify(beforeEditFile);
  const handleFileAdd = () => {
    if (exporterCsv.length !== 0) {
      if (select === "New") {
        setSelect(exporterCsv[0].file_id + "/" + exporterCsv[0].version);
        setTarget(versionValue[0]);
        setModify(false);
      } else {
        setTarget("");
        setSelect("New");
        setModify(true);
      }
    } else {
      if (select === "New") {
        setSelect(0);
        setTarget("");
        setModify(false);
      } else {
        setSelect("New");
        setTarget("New");
        setModify(true);
      }
    }
  };

  const descriptionDecode = (description) => {
    let descriptionDecodeValue = description
      .replace(/@>@/g, "\n")
      .replace(/@\$#/g, '"');
    return descriptionDecodeValue;
  };

  const handleSaveModal = () => {
    if (dontSaved) {
      setSaveEdit(true);
      setMoveId("New");
    } else {
      handleFileAdd();
    }
  };

  const handleSaveAnswer = (answer) => {
    if (answer === "Yes") {
      if (moveId === "New") {
        handleFileAdd();
      } else {
        if (type === "_helm.yaml") {
          setSelect(moveId);
          setModify(false);
        } else {
          const list = exporterCsv.filter((file) => file.version === moveId);
          setTarget(moveId);
          setSelect(list[0].file_id + "/" + list[0].version);
          setModify(false);
        }
      }
    }
    setSaveEdit(false);
  };

  const handleDeleteAnswer = (answer) => {
    if (answer === "Yes") {
      setExporterCsv("default");
      setDeleteFile(false);
      handleDelete();
      if (modify) {
        setModify(false);
      }
    } else {
      setDeleteFile(false);
    }
  };

  const handleDelete = () => {
    const fileType = type.slice(1, type.lastIndexOf("."));
    axios({
      method: "DELETE",
      url: `${API_SURVER}/exporter/${id}/tab?type=${fileType}&file_id=${select.slice(
        0,
        select.lastIndexOf("/")
      )}&version=${select.slice(select.lastIndexOf("/") + 1)}`,
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

  const handleVersionFile = (version) => {
    if (dontSaved) {
      setMoveId(version);
      setSaveEdit(true);
    } else {
      const list = exporterCsv.filter((file) => file.version === version);
      setTarget(version);
      setSelect(list[0].file_id + "/" + list[0].version);
      setModify(false);
    }
  };

  const handleFileInVersion = (fileIdInVersion) => {
    setSelect(fileIdInVersion + "/" + target);
  };

  return (
    <>
      <Title dark={changeTheme}>
        {type === "_helm.yaml"
          ? "Helm chart"
          : type === "_alert.yaml"
          ? "ALERTING RULE"
          : "GRAFANA DASHBOARD"}
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
            {exporterCsv.length !== 0
              ? type === "_helm.yaml"
                ? exporterCsv.map((file) => {
                    return (
                      <Category
                        active={file.file_id + "/" + file.version === select}
                        dark={changeTheme}
                        isEditMode={isEditMode}
                        key={file.file_id + file.version}
                        title={file.version}
                      >
                        <Div
                          active={file.file_id + "/" + file.version === select}
                          dark={changeTheme}
                          fileName={
                            isEditMode &&
                            file.file_id + "/" + file.version === select
                          }
                          onClick={() =>
                            handleChangeFile(file.file_id + "/" + file.version)
                          }
                        >
                          {file.version}
                        </Div>

                        {isEditMode &&
                          file.file_id + "/" + file.version === select && (
                            <EditBox>
                              <EditIcon
                                as={TiPencil}
                                className="edit"
                                onClick={() => setModify(true)}
                              />
                              <EditIcon
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
                : versionValue.map((versionName) => {
                    return (
                      <Fragment key={versionName}>
                        <Category
                          dark={changeTheme}
                          isEditMode={true}
                          active={target === versionName}
                          version="version"
                        >
                          <Div
                            dark={changeTheme}
                            onClick={() => handleVersionFile(versionName)}
                          >
                            {target !== versionName ? (
                              <VersionFolder1 />
                            ) : (
                              <VersionFolder2 />
                            )}
                            {versionName}
                          </Div>
                        </Category>
                        {versionName === target &&
                          fileName_version.map((ele) => {
                            return (
                              <Category
                                fileName="fileName"
                                active={
                                  ele.file_id + "/" + ele.version === select
                                }
                                dark={changeTheme}
                                isEditMode={isEditMode}
                                key={ele.file_id + ele.version}
                              >
                                <Div
                                  active={
                                    ele.file_id + "/" + ele.version === select
                                  }
                                  dark={changeTheme}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleFileInVersion(ele.file_id);
                                  }}
                                >
                                  <Arrow />
                                  <FileName>
                                    {descriptionDecode(
                                      ele.file_url.slice(
                                        ele.file_url.lastIndexOf("/") + 1,
                                        ele.file_url.lastIndexOf("_")
                                      )
                                    )}
                                  </FileName>
                                </Div>
                                {isEditMode &&
                                  ele.file_id + "/" + ele.version ===
                                    select && (
                                    <EditBox>
                                      <EditIcon
                                        as={TiPencil}
                                        className="edit"
                                        onClick={() => setModify(true)}
                                      />
                                      <EditIcon
                                        className="edit"
                                        onClick={() => {
                                          setDeleteFile(true);
                                        }}
                                      />
                                    </EditBox>
                                  )}
                              </Category>
                            );
                          })}
                      </Fragment>
                    );
                  })
              : select !== "New" && (
                  <Category>
                    <Div dark={changeTheme}>
                      "The file has not been ready to show up"
                    </Div>
                  </Category>
                )}
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
          handleDelete={handleSaveAnswer}
          content="Don't you want to save the changes you made?"
        ></DeleteModal>
      )}
      {deleteFile && (
        <DeleteModal
          handleDelete={handleDeleteAnswer}
          content="Do you want to delete it?"
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
  background: ${({ version, active, fileName }) =>
    active
      ? version === "version"
        ? "#f4f4f4"
        : "#eee"
      : fileName === "fileName" && "#f4f4f4"};
  cursor: pointer;
  color: ${(props) => (props.dark ? "#999" : "#999")};
  color: ${({ active }) => active && "black"};

  @media ${({ theme }) => theme.media.mobile} {
    justify-content: start;
    margin-left: ${({ addIcon }) => (addIcon ? "5px" : "24px")};
    color: ${({ active, dark }) =>
      dark ? (active ? "white" : "#949697") : active ? "eee" : "#black"};
    background: transparent;
    border-bottom: none;
  }

  &:hover {
    background: ${(props) => (props.dark ? "#eee" : "#black")};
    color: black;
    @media ${({ theme }) => theme.media.mobile} {
      background: transparent;
      color: ${(props) => (props.dark ? "white" : "#black")};
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
const FileName = styled.div`
  width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Div = styled.div`
  flex: 8;
  display: flex;

  padding: ${(props) =>
    props.fileName ? "3px 5px 3px 10px" : "3px 0px 3px 10px"};
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${({ theme }) => theme.media.mobile} {
    flex: none;
    font-size: 13px;
    padding: 0;
    /* border-bottom: ${({ dark, active }) =>
      active ? (dark ? "1px solid #f5f6f7" : "1px solid black") : ""}; */
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

const EditIcon = styled(RiDeleteBin6Line)`
  z-index: 3;
`;

const Arrow = styled(BsArrowReturnRight)`
  margin: 0px 3px 0px 20px;
  @media ${({ theme }) => theme.media.mobile} {
    margin: 0px 3px 0px 30px;
  }
`;

const VersionFolder1 = styled(RiFolderTransferLine)`
  margin: 0px 10px 0px 2px;
`;
const VersionFolder2 = styled(RiFolderDownloadLine)`
  margin: 0px 10px 0px 2px;
`;
