import React from 'react';
import styled from 'styled-components';
import PageLayout from 'templates/PageLayout';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <PageLayout>
      <Container>
        <Wrap>
          <Title>️👮👮‍♀️‍밥상보안관👮👮‍</Title>
          <SubText>
            최근 가장 큰 이슈, 일본의 방사능 오염수 방류. <br />
            우리나라 수산물의 안전한 소비와
            <br /> 공급을 위한 프로덕트입니다.
          </SubText>
          <Link to="/food">
            <ButtonBlue>식품 보기</ButtonBlue>
          </Link>
          <Link to="/restaurant">
            <Button>식당 보기</Button>
          </Link>
        </Wrap>
      </Container>
    </PageLayout>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Wrap = styled.div`
  width: 360px;
`;

const Title = styled.h1`
  color: #6d758f;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`;

const SubText = styled.p`
  color: #6d758f;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
`;

const Button = styled.button`
  width: 326px;
  height: 93px;
  border: 2px solid #ced1dd;
  display: block;
  font-size: 24px;
  color: #ced1dd;
  font-weight: 600;
  margin: 30px auto;
`;

const ButtonBlue = styled(Button)`
  color: #20bbff;
`;

export default Main;
