import React from 'react';
import styled from 'styled-components';
import PageLayout from 'templates/PageLayout';
import { MdChevronLeft } from 'react-icons/md';
import { foodData } from 'data/foodData';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const FoodDetail = () => {
  let location = useLocation();

  const dataId = location.pathname.split('/')[3];

  const numberWidthComma = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <PageLayout>
      {foodData[dataId - 1].deleted === true ? (
        <DeleteWrap>
          <DeletePageText>페이지를 찾을 수 없습니다</DeletePageText>
        </DeleteWrap>
      ) : (
        <Wrap>
          <Title>👮👮‍♀️‍밥상보안관👮👮‍</Title>
          <Nav>
            <Background onClick={handleClickBack} id="back-food-detail-btn">
              <MdChevronLeft />
            </Background>
            <NavText>식품</NavText>
          </Nav>
          <TitleWrap>
            <Origin>
              {Array.isArray(foodData[dataId - 1].origin)
                ? foodData[dataId - 1].origin.map((item) => <OriginText>{item}</OriginText>)
                : foodData[dataId - 1].origin + foodData[dataId - 1]?.region &&
                  ` - ` + foodData[dataId - 1]?.region}
            </Origin>
            <Brand>{foodData[dataId - 1].brand}</Brand>
            <Name>{foodData[dataId - 1].name}</Name>
            <Price>{numberWidthComma(foodData[dataId - 1].price)}원</Price>
            <SubText>
              해당 금액은 정가이며 다양한 할인 및 혜택은
              <br />
              구매사이트에서 확인할 수 있습니다.
            </SubText>
          </TitleWrap>
          <Link to={foodData[dataId - 1].storeUrl} id="food-site-btn">
            <Button>구매사이트 바로가기</Button>
          </Link>
          <Photo>
            <DetailImg src={foodData[dataId - 1].img} />
          </Photo>
          <ProductDetail>
            <ProductDetailTitle>대표 수산물 원산지 한눈에</ProductDetailTitle>
            {Array.isArray(foodData[dataId - 1].product) ? (
              foodData[dataId - 1].product.map((item, idx) => (
                <ProductDetailBoxWrap>
                  <ProductName>
                    <ProductDetailIcon>
                      <FaCircleCheck />
                    </ProductDetailIcon>
                    {item}
                  </ProductName>
                  <ProductStatus>
                    <ProductOrigin>
                      {foodData[dataId - 1].origin[idx] === '국내산'
                        ? foodData[dataId - 1].origin[idx] +
                          ` (${foodData[dataId - 1].region[idx]})`
                        : foodData[dataId - 1].origin[idx]}
                    </ProductOrigin>
                    <Status>안전</Status>
                  </ProductStatus>
                </ProductDetailBoxWrap>
              ))
            ) : (
              <ProductDetailBoxWrap>
                <ProductName>
                  <ProductDetailIcon>
                    <FaCircleCheck />
                  </ProductDetailIcon>
                  {foodData[dataId - 1].product}
                </ProductName>
                <ProductStatus>
                  <ProductOrigin>
                    {foodData[dataId - 1].origin === '국내산'
                      ? foodData[dataId - 1].origin + ` (${foodData[dataId - 1].region})`
                      : foodData[dataId - 1].origin}
                  </ProductOrigin>
                  <Status>안전</Status>
                </ProductStatus>
              </ProductDetailBoxWrap>
            )}
            <Date>
              원산지 정보 업데이트 날짜 : 20{foodData[dataId - 1].date.slice(0, 2)}년{' '}
              {foodData[dataId - 1].date.slice(3, 5)}월 {foodData[dataId - 1].date.slice(6, 8)}일
            </Date>
            <Notice>
              원산지 정보는 업데이트 날짜에 따른
              <br />
              해당 업체 고객센터에 문의한 내역입니다.
            </Notice>
            <CompanyInfo>
              <CompanyInfoBox>
                <CompanyInfoLabel>고객센터</CompanyInfoLabel>
                <CompanyInfoText>
                  {foodData[dataId - 1].customerServieceCenter
                    ? foodData[dataId - 1].customerServieceCenter
                    : '정보 미제공'}
                </CompanyInfoText>
              </CompanyInfoBox>
              <CompanyInfoBox>
                <CompanyInfoLabelBold>구매처</CompanyInfoLabelBold>
                <Link to={foodData[dataId - 1].storeUrl} id="food-site-shortcuts">
                  <SiteButton>
                    <SiteButtonText>구매사이트 바로가기</SiteButtonText>
                    <SiteButtonIcon>
                      <FaArrowRight />
                    </SiteButtonIcon>
                  </SiteButton>
                </Link>
              </CompanyInfoBox>
            </CompanyInfo>
          </ProductDetail>
        </Wrap>
      )}
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

const TitleWrap = styled.div`
  width: 326px;
  margin: 15px auto 0;
`;

const Origin = styled.p`
  color: #20bbff;
  font-size: 16px;
  font-weight: 800;
`;

const Name = styled.p`
  color: #6d758f;
  font-size: 21px;
  font-weight: 800;
  margin: 5px 0 0 0;
`;

const Brand = styled.p`
  color: #ababab;
  font-size: 14px;
  font-weight: 800;
  margin: 5px 0 0 0;
`;
const Price = styled.p`
  color: #f6190b;
  font-size: 21px;
  font-weight: 800;
  margin: 5px 0 0 0;
`;

const SubText = styled.p`
  color: #6d758f;
  font-size: 12px;
  margin: 5px 0 0 0;
`;

const Button = styled.button`
  width: 326px;
  height: 46px;
  border-radius: 8px;
  background-color: #20bbff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: block;
  margin: 20px auto 15px;
`;

const Photo = styled.div`
  width: 326px;
  height: 278px;
  background-color: #e6e6e6;
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
`;

const ProductDetail = styled.div`
  width: 326px;
  margin: 20px auto 0;
`;

const ProductDetailTitle = styled.p`
  color: #6d758f;
  font-size: 16px;
  font-weight: 600;
`;

const ProductDetailBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 0 0;
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
  align-items: center;
`;

const ProductOrigin = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
  color: #6d758f;
`;

const Status = styled(ProductOrigin)`
  color: #20bbff;
  width: 40px;
`;

const Date = styled.p`
  font-size: 12px;
  color: #6d758f;
  text-align: center;
  margin: 20px 0;
`;

const Notice = styled(Date)``;

const CompanyInfo = styled.div`
  width: 326px;
  height: 75px;
  background-color: #f5f5f5;
  padding: 13px;
`;

const CompanyInfoBox = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin: 5px 0 0 0;
  }
`;

const CompanyInfoLabel = styled.p`
  width: 60px;
  font-size: 14px;
  color: #6d758f;
`;

const CompanyInfoText = styled.p`
  font-size: 14px;
  color: #6d758f;
`;

const CompanyInfoLabelBold = styled(CompanyInfoLabel)`
  font-weight: 700;
`;

const SiteButton = styled.button`
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
`;

const SiteButtonText = styled.p`
  line-height: 14px;
  font-size: 14px;
  color: #6d758f;
  font-weight: 700;
  border-bottom: 1px solid #6d758f;
`;

const SiteButtonIcon = styled.p`
  font-size: 12px;
  color: #6d758f;
  line-height: 14px;
  margin: 3px 0 0 4px;
`;

const DetailImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const OriginText = styled.span`
  & + & {
    margin: 0 0 0 5px;

    &::before {
      content: '/ ';
    }
  }
`;

const DeleteWrap = styled.div`
  width: 360px;
  margin: 0 auto;
  padding: 20px 0;
  height: 100vh;
  background-color: #eee;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeletePageText = styled.p``;

export default FoodDetail;
