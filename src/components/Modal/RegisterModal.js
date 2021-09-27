import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCategoriesData } from "../../store/actions/exporterActions";
import axios from "axios";
import styled from "styled-components";
import { EXPORTER_ADMIN_API, CATEGORIES_API } from "../../config";
import { Fragment } from "react";

const RegisterModal = ({ cancleModal }) => {
  const categories = useSelector((store) => store.categoryReducer);
  const [exporterTitle, setExporterTitle] = useState("");
  const [repoUrl, setRepoUrl] = useState("Default");
  const [category, setCategory] = useState("Select category");
  const [failMessage, setFailMessage] = useState("");
  const [pluscategory, setPluscategory] = useState(false);
  const [createCategory, setCreateCategory] = useState("");
  const dispatch = useDispatch();

  const registerExporter = () => {
    if (exporterTitle.length === 0) {
      setFailMessage("WRONG_EXPORTER_TITLE");
      return;
    } else if (category === "Select category") {
      setFailMessage("Select category");
      return;
    }
    axios({
      method: "POST",
      url: `${EXPORTER_ADMIN_API}`,
      data: {
        title: exporterTitle,
        repo_url: repoUrl,
        category: category,
      },
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        setFailMessage(error.response?.data.message);
      });
  };

  const getCategory = () => {
    axios({
      method: "GET",
      url: `${CATEGORIES_API}`,
    })
      .then((res) => {
        dispatch(loadCategoriesData(res.data.categories));
      })
      .catch((err) => console.log(err));
  };

  const inputExporterTitle = (e) => {
    setExporterTitle(e.target.value);
  };

  const inputRepoUrl = (e) => {
    setRepoUrl(e.target.value);
  };

  const selectCategory = (e) => {
    if (e.target.value === "+ New category !") {
      setCategory(e.target.value);
      setPluscategory(true);
    } else {
      setPluscategory(false);
      setCategory(e.target.value);
    }
    setFailMessage("");
  };

  const handlePlusCategory = () => {
    if (createCategory === "") {
      setFailMessage("write category name");
      return;
    } else {
      const isSame = categories.filter(
        (category) =>
          category.category_name.toLowerCase() === createCategory.toLowerCase()
      );
      if (isSame.length === 0) {
        let today = new Date();
        let todayDate = today.toLocaleDateString();
        axios({
          method: "post",
          url: `${CATEGORIES_API}`,
          data: {
            category: createCategory,
            date: todayDate,
          },
          headers: {
            Authorization: sessionStorage.getItem("access_token"),
          },
        })
          .then(() => {
            getCategory();
            setPluscategory(false);
            setCreateCategory("");
            setFailMessage("");
            setCategory("Select category");
            setExporterTitle("");
            setRepoUrl("");
          })
          .catch((error) => {});
      } else {
        setFailMessage("This name already exists.");
      }
    }
  };

  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        <Container>
          <div>{failMessage}</div>
          <select
            className="inputDiv"
            value={category}
            onChange={selectCategory}
          >
            <option>Select category</option>
            <option>+ New category !</option>
            {categories.map((category) => {
              return (
                <option key={category.category_id}>
                  {category.category_name}
                </option>
              );
            })}
          </select>
          {pluscategory ? (
            <input
              onChange={({ target }) => setCreateCategory(target.value)}
              placeholder="category name"
            />
          ) : (
            <Fragment>
              <input
                className="inputDiv"
                onChange={inputExporterTitle}
                placeholder="exporter title"
              ></input>
              <input
                className="inputDiv"
                onChange={inputRepoUrl}
                placeholder="repository url"
              ></input>
            </Fragment>
          )}
        </Container>
        {!pluscategory ? (
          <Fragment>
            <Button onClick={registerExporter}>Register</Button>
            <Button onClick={cancleModal}>Back</Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button onClick={handlePlusCategory}>add</Button>
            <Button
              onClick={() => {
                setPluscategory(false);
                setCategory("Select category");
                setFailMessage("");
                setExporterTitle("");
                setRepoUrl("");
              }}
            >
              Back
            </Button>
          </Fragment>
        )}
      </Div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Div = styled.div`
  width: 300px;
  height: fit-content;
  padding: 50px 0;
  background-color: white;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 20px 0;

  div {
    height: 20px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 13px;
    color: #ff0000;
  }

  input {
    ${({ theme }) => theme.ModalButton};
    margin-top: 10px;
  }

  select {
    margin-top: 10px;
    ${({ theme }) => theme.ModalButton}
  }
`;

const Button = styled.div`
  width: 230px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #85dbc3;
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  ${({ theme }) => theme.flexCenter};
  cursor: pointer;
`;

export default RegisterModal;
