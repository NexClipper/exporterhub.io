import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const CardExporter = ({ exporter, history }) => {
  const {
    exporter_id,
    name,
    description,
    stars,
    logo_url,
    official,
    category
  } = exporter;

  const goToDetail = id => {
    history.push(`/detail/${id}`);
  };

  return (
    <Div onClick={() => goToDetail(exporter_id)}>
      <header>
        <span>☆{stars}</span>
      </header>
      <article>
        <h1>
          <img src={logo_url} alt={name} />
        </h1>
        <h2>{name}</h2>
        <h3>
          <span>{official}</span>
          <span>{category}</span>
        </h3>
        <p>{description}</p>
      </article>
    </Div>
  );
};

const Div = styled.div`
  width: 270px;
  height: 230px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px 20px 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;

  header,
  article {
    width: 80%;
  }
  header {
    font-size: 12px;
    text-align: end;
    padding: 10px 10px;
  }

  article {
    > * {
      text-align: center;
      margin-bottom: 5px;
      font-size: 12px;
    }

    h1 {
      img {
        width: 45px;
        height: 45px;
        margin-bottom: 15px;
      }
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      color: gray;
      margin-bottom: 20px;

      span {
        margin: 0 10px;
      }
    }
  }
`;
export default withRouter(CardExporter);
