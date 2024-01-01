import React from 'react';
import styled from 'styled-components';
import PageLayout from 'templates/PageLayout';
import { dummy } from 'resources/dummyData';
import { useNavigate } from 'react-router-dom';
import MapIcon from 'resources/MapIcon.png';
import ContactIcon from 'resources/ContactIcon.png';
import SeaMap from 'resources/SeaMap.png';
import { FaCircleCheck } from 'react-icons/fa6';
import { MdChevronLeft } from 'react-icons/md';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <PageLayout>
      <Wrap>
        <Title>👮👮‍♀️‍밥상보안관👮👮‍</Title>
        <Nav>
          <Background onClick={handleClickBack} id="back-button">
            <MdChevronLeft />
          </Background>
          <NavText>식당</NavText>
        </Nav>
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
        <ImgWrap>
          <Img src={dummy.companyImg} alt="company-img" />
        </ImgWrap>
        <ProductDetailInfo>
          <ProductDetailInfoTitle>우리 업체의 대표 수산물 원산지 한눈에</ProductDetailInfoTitle>
          {dummy.product.map((item) => (
            <ProductDetailBoxWrap>
              <ProductName>
                <ProductDetailIcon>
                  <FaCircleCheck />
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
        <SmallText>원산지 정보 업데이트 날짜 : 2024년 10월 23일</SmallText>
        <MapWrap>
          <Img src={SeaMap} alt="지도" />
        </MapWrap>
        <SmallText>
          밥상보안관은 행정안전부의 공공데이터포털 해양방사능
          <br />
          안전 정보 데이터를 활용하여 서비스를 제공하고 있습니다.
        </SmallText>
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
  margin: 15px auto 0;
  width: 326px;
`;

const ProductDetailInfo = styled.div`
  padding: 0 10px;
  width: 326px;
  margin: 30px auto 40px;
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
  margin: 3px 10px 0 0;
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

const SmallText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #6d758f;
  margin: 10px 0 20px 0;
`;

const ImgWrap = styled.div`
  margin: 20px auto 0;
  width: 327px;
`;

export default RestaurantDetail;
