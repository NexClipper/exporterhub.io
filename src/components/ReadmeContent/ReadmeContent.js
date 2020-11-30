import styled from "styled-components";
import { FiShare2 } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ReadmeContent = () => {
  return (
    <>
      <Header>
        <Container>
          <OpenSourceInfo>
            <HeaderLogo
              src="./images/prometheus_logo.png"
              alt="오픈소스 로고"
            />
            <ListWrap>
              <List>
                <Name>My SQL Server Exporter</Name>
                <ShareIcon>
                  <FiShare2 />
                </ShareIcon>
              </List>
              <List>
                <Category>Database</Category>
                <StarIcon>
                  <AiFillStar /> 12
                </StarIcon>
              </List>
            </ListWrap>
          </OpenSourceInfo>
        </Container>
      </Header>
      <Main>
        <Container>
          <ReadmeTitle>README</ReadmeTitle>
          <Aside>
            <AddToCart>ADD TO MY CART</AddToCart>
          </Aside>
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
  left: 165px;
  bottom: -50px;
  max-width: 350px;
`;

const HeaderLogo = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  margin: 0 auto;
`;

const ListWrap = styled.ul`
  margin: 30px 0 0;
  padding: 12px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
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

const ShareIcon = styled.button`
  font-size: 20px;
  color: #999;

  &:hover {
    color: #555;
  }

  svg {
    vertical-align: middle;
  }
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
  background: #fafafa;
  border-radius: 50px 0 0 0;
`;

const ReadmeTitle = styled.h4`
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.08rem;
`;

const Aside = styled.aside`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
`;

const AddToCart = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  background: #53a28c;
  border-radius: 3px;
  text-align: center;
  color: #fff;
`;

export default ReadmeContent;
