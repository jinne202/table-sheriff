import React from 'react';
import styled from 'styled-components';
import PageLayout from 'templates/PageLayout';
import { dummy } from 'resources/dummyData';
import MapIcon from 'resources/MapIcon.png';
import ContactIcon from 'resources/ContactIcon.png';
import SeaMap from 'resources/SeaMap.png';
import CheckCircle from 'resources/CheckCircle.png';

const Detail = () => {
  return (
    <PageLayout>
      <Title>️👮👮‍♀️‍밥상보안관👮👮‍</Title>
      <Info>
        <CompanyTitleWrap>
          <CompanyTitle>{dummy.companyName}</CompanyTitle>
          <ProductInfo>
            수산물 {dummy.entireProduct}개중 {dummy.safetyProduct}개 안전
          </ProductInfo>
        </CompanyTitleWrap>
        <SubInfo>
          <Icon>
            <Img src={MapIcon} alt="지도-아이콘" />
          </Icon>
          <InfoText>{dummy.companyAddress}</InfoText>
        </SubInfo>
        <SubInfo>
          <Icon>
            <Img src={ContactIcon} alt="전화-아이콘" />
          </Icon>
          <ContactInfoText>{dummy.companyContact}</ContactInfoText>
        </SubInfo>
      </Info>
      <MapWrap>
        <Img src={SeaMap} alt="지도" />
      </MapWrap>
      <ProductDetailInfo>
        <ProductDetailInfoTitle>우리 업체의 대표 수산물 원산지 한눈에</ProductDetailInfoTitle>
        {dummy.product.map((item) => (
          <ProductDetailBoxWrap>
            <ProductName>
              <ProductDetailIcon>
                <Img src={CheckCircle} alt="체크표시" />
              </ProductDetailIcon>
              {item.productName}
            </ProductName>
            <ProductStatus>
              <Origin>{item.origin}</Origin>
              <Status>
                {item.status === true
                  ? '안전'
                  : item.status === false
                  ? '불안전'
                  : item.status === null
                  ? '-'
                  : ''}
              </Status>
            </ProductStatus>
          </ProductDetailBoxWrap>
        ))}
      </ProductDetailInfo>
    </PageLayout>
  );
};

export default Detail;

const Title = styled.h1`
  color: #6d758f;
  font-weight: 700;
  font-size: 30px;
  margin: 30px auto;
  text-align: center;
`;

const Info = styled.div`
  width: 326px;
  margin: 0 auto;
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
  margin: 0 0 15px 0;
`;

const ProductInfo = styled.p`
  color: #20bbff;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  width: 25px;
`;
const Img = styled.img``;

const InfoText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #6d758f;
`;

const ContactInfoText = styled(InfoText)`
  text-decoration: underline;
`;

const MapWrap = styled.div`
  margin: 32px auto 48px;
  width: 326px;
`;

const ProductDetailInfo = styled.div`
  padding: 0 10px;
  width: 326px;
  margin: 0 auto 40px;
`;

const ProductDetailInfoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #6d758f;
  margin: 0 0 24px 0;
`;

const ProductDetailBoxWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  justify-content: space-between;
`;

const ProductDetailIcon = styled.div`
  margin: -2px 10px 0 0;
`;

const ProductName = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #6d758f;
  display: flex;
`;

const ProductStatus = styled.div`
  display: flex;
`;

const Origin = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
  color: #6d758f;
`;

const Status = styled(Origin)`
  color: #20bbff;
  width: 40px;
`;
