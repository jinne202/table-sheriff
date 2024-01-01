import React from 'react';
import styled from 'styled-components';
import PageLayout from 'templates/PageLayout';
import { Link, useNavigate } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

import Card from 'components/Atom/Card';

import { foodData } from 'data/foodData';

const FoodMain = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <PageLayout>
      <Wrap>
        <Title>👮👮‍♀️‍밥상보안관👮👮‍</Title>
        <Nav>
          <Background onClick={handleClickBack} id="back-food-btn">
            <MdChevronLeft />
          </Background>
          <NavText>식품</NavText>
        </Nav>
        <SubText>
          우리 미래를 위한 밥상의 수호자, <br />
          신선하고 안전한 수산물을 선택하세요
        </SubText>
        <SecureText>*해외 수산물 정부데이터의 안전 여부는 업데이트 예정입니다.</SecureText>
        <CardWrap>
          {foodData.map(
            (item) =>
              !item.deleted && (
                <CardMargin>
                  <Link to={{ pathname: `/food/detail/${item.idx}` }}>
                    <Card key={item.idx} data={item} />
                  </Link>
                </CardMargin>
              ),
          )}
        </CardWrap>

        <ButtonFlexWrap>
          <ButtonLink to="https://forms.gle/PbGzqhU4JeEki2Ea8" id="food-apply-btn">
            <ApplyButton>식품 신청하기</ApplyButton>
          </ButtonLink>
          <ButtonLink to="https://pf.kakao.com/_UhxgKG/chat?from=qr" id="food-kakao-btn">
            <KaKaoButton>카톡 문의하기</KaKaoButton>
          </ButtonLink>
        </ButtonFlexWrap>
      </Wrap>
    </PageLayout>
  );
};

const Wrap = styled.div`
  width: 360px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Title = styled.p`
  color: #6d758f;
  font-weight: 700;
  font-size: 21px;
  text-align: center;
`;

const Nav = styled.div`
  width: 326px;
  margin: 5px auto 10px;
  position: relative;
`;

const NavText = styled.p`
  color: #6d758f;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
`;

const Background = styled.button`
  position: absolute;
  color: #6d758f;
  font-weight: 800;
  font-size: 40px;
  top: -1px;
`;

const SubText = styled.p`
  color: #6d758f;
  font-size: 16px;
  text-align: center;
  line-height: 18px;
`;

const SecureText = styled.p`
  color: #6d758f;
  font-size: 12px;
  text-align: center;
  margin: 25px 0 0 0;
`;

const CardWrap = styled.div`
  margin: 10px auto 0;
  width: 326px;
`;

const ButtonLink = styled(Link)`
  & + & {
    margin: 0 0 0 10px;
  }
`;

const ApplyButton = styled.button`
  width: 159px;
  height: 46px;
  padding: 18 22px;
  border-radius: 8px;
  margin: 48px auto 100px;
  background-color: #20bbff;
  box-shadow: 0px 1px 4px 0px #19213d14;
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
`;

const KaKaoButton = styled(ApplyButton)`
  background-color: #f0d71b;
`;

const ButtonFlexWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const CardMargin = styled.div`
  & + & {
    margin: 10px 0 0 0;
  }
`;

export default FoodMain;
