import React from "react";
import styled from "styled-components";

const CardExporter = ({ exporter }) => {
  const { name, description, stars, logo_url, official, category } = exporter;
  return (
    <Div>
      <header>
        <span>☆{stars}</span>
      </header>
      <article>
        <img src={logo_url} alt={name} />
        <h2>{name}</h2>
        <div>
          <span>{official}</span>
          <span>{category}</span>
        </div>
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
  margin: 0 10px 10px 0;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 45px;
      height: 45px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 16px;
    }
  }
`;
export default CardExporter;
