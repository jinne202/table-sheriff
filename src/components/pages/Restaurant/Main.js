import React from 'react';
import styled from 'styled-components';
import PageLayout from 'templates/PageLayout';
import KakaoMap from 'components/modules/KakaoMap';
import ArrowRigth from 'resources/ArrowRigth.png';
import { dummy } from 'resources/dummyData';
import { Link, useNavigate } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

const RestaurantMain = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <PageLayout>
      <Wrap>
        <Title>👮👮‍♀️‍밥상보안관👮👮‍</Title>
        <Nav>
          <Background onClick={handleClickBack}>
            <MdChevronLeft />
          </Background>
          <NavText>식당</NavText>
        </Nav>
        <SubText>
          최근 가장 큰 이슈, 일본의 방사능 오염수 방류. <br />
          우리나라 수산물의 안전한 소비와
          <br /> 공급을 위한 프로덕트입니다.
        </SubText>
        <MapWrap>
          <KakaoMap latitude={dummy.latitude} longitude={dummy.longitude} />
        </MapWrap>
        <SmallText>
          행정안전부 해양방사능 안전 정보 데이터
          <br />
          최종 업로드 날짜 : 10월 25일
        </SmallText>
        <Link to="/restaurant/detail" id="main-button">
          <Card>
            <CardImgWrap>
              <CardImg src={dummy.thumbnail} alt="썸네일" />
            </CardImgWrap>
            <CardTextWrap>
              <CompanyTitleWrap>
                <CompanyTitle>{dummy.companyName}</CompanyTitle>
                <ProductInfo>
                  수산물 {dummy.entireProduct}개중 {dummy.safetyProduct}개 안전
                </ProductInfo>
              </CompanyTitleWrap>
              <CompanyAddress>{dummy.companyAddress}</CompanyAddress>
              <ButtonWrap>
                <ShowMoreButton>
                  상세보기
                  <ButtonImg>
                    <Img src={ArrowRigth} alt="화살표" />
                  </ButtonImg>
                </ShowMoreButton>
              </ButtonWrap>
            </CardTextWrap>
          </Card>
        </Link>
        <ButtonFlexWrap>
          <ButtonLink to="https://forms.gle/Y3VHvMC2G8w9wCpn7" id="apply-btn">
            <ApplyButton>업체 신청하기</ApplyButton>
          </ButtonLink>
          <ButtonLink to="https://pf.kakao.com/_UhxgKG/chat?from=qr" id="kakao-btn">
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
  height: 109px;
  border: 1px solid #e1e4ed;
  margin: 32px auto 0;
  box-shadow: 0px 1px 4px 0px #19213d14;
  border-radius: 8px;
  padding: 22px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardImgWrap = styled.div``;
const CardTextWrap = styled.div`
  margin: 0 0 0 10px;
  width: 210px;
`;

const CardImg = styled.img``;

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
  font-size: 16px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const CompanyAddress = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  margin: 5px 0 8px;
  color: #6d758f;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
`;

const ShowMoreButton = styled.button`
  font-size: 12px;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  color: #6d758f;
  border: 0;
  padding: 0;
  display: flex;
  justify-content: end;
`;

const ButtonImg = styled.div`
  width: 10px;
  height: 10px;
  margin: -1px 0 0 8px;

  & > img {
    width: 100%;
  }
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

const SubText = styled.p`
  color: #6d758f;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  margin: 20px 0;
`;

export default RestaurantMain;
