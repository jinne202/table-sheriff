import React from 'react';
import styled from 'styled-components';
import PageLayout from 'templates/PageLayout';
// import KakaoMap from 'components/modules/KakaoMap';
import ArrowRigth from 'resources/ArrowRigth.png';
import ArrowRightWhite from 'resources/ArrowRightWhite.png';
import { dummy } from 'resources/dummyData';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <PageLayout>
      <Title>️👮👮‍♀️‍밥상보안관👮👮‍</Title>
      <SubText>
        최근 가장 큰 이슈, 일본의 방사능 오염수 방류. <br />
        우리나라 수산물의 안전한 소비와
        <br /> 공급을 위한 프로덕트입니다.
      </SubText>
      <MapWrap>{/* <KakaoMap latitude={dummy.latitude} longitude={dummy.longitude} /> */}</MapWrap>
      <SmallText>
        밥상보안관은 행정안전부의 공공데이터포털 해양방사능
        <br />
        안전 정보 데이터를 활용하여 서비스를 제공하고 있습니다.
      </SmallText>
      <Link to="/detail" id="main-button">
        <Card>
          <CompanyTitleWrap>
            <CompanyTitle>{dummy.companyName}</CompanyTitle>
            <ProductInfo>
              수산물 {dummy.entireProduct}개중 {dummy.safetyProduct}개 안전
            </ProductInfo>
          </CompanyTitleWrap>
          <CompanyAddress>{dummy.companyAddress}</CompanyAddress>
          <ShowMoreButton>
            상세보기
            <ButtonImg>
              <Img src={ArrowRigth} alt="화살표" />
            </ButtonImg>
          </ShowMoreButton>
        </Card>
      </Link>
      <ApplyButton>
        <ApplyButtonWrap>
          밥상보안관 업체 신청하기
          <ButtonImg>
            <Img src={ArrowRightWhite} alt="화살표" />
          </ButtonImg>
        </ApplyButtonWrap>
      </ApplyButton>
    </PageLayout>
  );
};

export default Main;

const Title = styled.h1`
  color: #6d758f;
  font-weight: 700;
  font-size: 30px;
  margin: 30px auto;
  text-align: center;
`;

const SubText = styled.p`
  color: #6d758f;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
`;

const MapWrap = styled.div`
  margin: 32px auto 0;
  width: 326px;
  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.img``;

const SmallText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #6d758f;
  margin: 10px 0 0 0;
`;

const Card = styled.div`
  width: 326px;
  height: 161px;
  border: 1px solid #e1e4ed;
  margin: 32px auto 0;
  box-shadow: 0px 1px 4px 0px #19213d14;
  border-radius: 8px;
  padding: 38px 24px;
`;

const CompanyTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompanyTitle = styled.p`
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #6d758f;
`;

const ProductInfo = styled.p`
  color: #20bbff;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const CompanyAddress = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin: 10px 0 14px;
  color: #6d758f;
`;

const ShowMoreButton = styled.button`
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #6d758f;
  border: 0;
  padding: 0;
  display: flex;
`;

const ButtonImg = styled.div`
  width: 10px;
  height: 10px;
  margin: -1px 0 0 8px;

  & > img {
    width: 100%;
  }
`;

const ApplyButton = styled.button`
  width: 290px;
  height: 48px;
  padding: 18 22px;
  border-radius: 8px;
  margin: 48px auto 100px;
  background-color: #6d758f;
  box-shadow: 0px 1px 4px 0px #19213d14;
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
`;

const ApplyButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
