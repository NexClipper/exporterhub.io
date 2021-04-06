import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { targetUnforkRepo } from "../../store/actions/exporterActions";
const CardExporter = ({
  exporter,
  cardClick,
  fork,
  mybucket,
  setIsForkModalActive,
}) => {
  const {
    exporter_id,
    name,
    description,
    stars,
    logo_url,
    official,
    category,
    is_new,
  } = exporter;
  const dispatch = useDispatch();
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const unforkRepo = (e, id) => {
    e.stopPropagation();
    setIsForkModalActive(true);
    console.log("unforkRepo", id);
    dispatch(targetUnforkRepo(id));
  };
  return (
    <Div
      dark={changeTheme}
      onClick={() => cardClick(exporter_id)}
      fork={fork}
      mybucket={mybucket}
    >
      <header>
        {is_new && <New dark={changeTheme}>NEW</New>}
        <span>
          <Icon>
            <AiFillStar />
          </Icon>
          {stars}
        </span>
        {/* <span>★{stars}</span> */}
      </header>
      <Article>
        <div>
          <img src={logo_url} alt={name} />
        </div>
        <Section dark={changeTheme}>
          <span>{name}</span>
          <div>
            <span>{official}</span>
            <span>{category}</span>
          </div>
          <p>{description}</p>
        </Section>
      </Article>
      {fork && (
        <Unfork onClick={(e) => unforkRepo(e, exporter_id)} className="unfork">
          <div>
            <RiDeleteBinLine />
            <span>Unfork this exporter</span>
          </div>
        </Unfork>
      )}
    </Div>
  );
};
const Div = styled.div`
  position: relative;
  width: ${({ theme }) => theme.width.card}px;
  height: 320px;
  transition: 0.1s ease-in-out;
  background-color: ${(props) => (props.dark ? "#242526" : "#ffffff")};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${({ theme }) =>
    (theme.width.content - theme.width.card * 3) / 2}px;
  margin-right: ${(props) => props.mybucket && "20px"};
  &:nth-child(4n) {
    margin-right: ${(props) => props.mybucket && "0"};
  }
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  padding: 0 20px;
  &:hover {
    transform: scale(1.05);
  }
  &:hover .unfork {
    display: block;
  }
  @media ${({ theme }) => theme.media.mobile} {
    height: 120px;
    width: 100%;
    align-items: flex-start;
    padding: 0 30px;
    margin-right: 0%;
  }
  header {
    width: 100%;
    font-size: 12px;
    text-align: end;
    padding: 20px 0;
    span {
      color: ${(props) => (props.dark ? "#f5f6f7" : "#000000")};
    }
    @media ${({ theme }) => theme.media.mobile} {
      padding: 15px 0;
    }
  }
`;
const New = styled.p`
  float: left;
  padding: 2px 5px;
  background-color: #6ac4a5;
  border-radius: 4px;
  color: ${(props) => (props.dark ? "#242526" : "white")};
`;
const Article = styled.article`
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    flex-direction: row;
  }
  div {
    text-align: center;
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 35px;
      @media ${({ theme }) => theme.media.mobile} {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.media.mobile} {
    margin-left: 20px;
    align-items: flex-start;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    color: ${(props) => (props.dark ? "#f5f6f7" : "#000000")};
  }
  div {
    color: gray;
    margin-bottom: 20px;
    span {
      &:first-child {
        margin-right: 20px;
      }
      font-weight: 400;
      font-size: 14px;
    }
  }
  p {
    display: -webkit-box;
    text-align: center;
    font-size: 14px;
    white-space: normal;
    line-height: 1.2;
    height: 2.4em;
    word-wrap: break-word;
    overflow: hidden;
    color: ${(props) => (props.dark ? "#f5f6f7" : "#000000")};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;
const Icon = styled.span`
  vertical-align: middle;
`;
const Unfork = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fafbfc;
  color: #c6474e;
  width: 100%;
  border: 1px solid #d9dbdb;
  text-align: center;
  font-size: 15px;
  height: 70px;
  line-height: 70px;
  display: none;
  font-weight: 500;
  border-radius: 0 0 5px 5px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -2px;
    span {
      margin-left: 5px;
    }
  }
`;
export default withRouter(CardExporter);
