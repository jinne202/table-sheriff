import React from 'react';
import styled, { css } from 'styled-components';

const Card = ({ data }) => {
  return (
    <Wrap>
      <Photo>
        <CardImg src={data.img} />
      </Photo>
      <TextWrap>
        {Array.isArray(data.origin) ? (
          <Origin active={data.origin[0] === '국내산'}>{data.origin[0]}</Origin>
        ) : (
          <Origin active={data.origin === '국내산'}>
            {data.origin === '국내산' ? data.origin + ` (${data.region})` : data.origin}
          </Origin>
        )}
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
      </TextWrap>
      <Badge>안전</Badge>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 326px;
  height: 95px;
  border: 1px solid #e1e4ed;
  box-shadow: 1px 1px 10px -3px #e6e6e6;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Photo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: #e6e6e6;
`;

const TextWrap = styled.div`
  margin: 0 0 0 10px;
`;

const Origin = styled.p`
  font-size: 14;
  color: #20bbff;
  font-weight: 800;
  width: 190px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${(props) =>
    props.active === false &&
    css`
      color: #d590ff;
    `}
`;

const Brand = styled.p`
  font-size: 12px;
  color: #ababab;
  font-weight: 800;
`;

const Name = styled.p`
  font-size: 16px;
  color: #6d758f;
  font-weight: 800;
  width: 190px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Badge = styled.div`
  font-size: 12px;
  color: #ffffff;
  font-weight: 800;
  background-color: #20bbff;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 2px 10px 1px;
  border-radius: 6px;
`;

const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Card;
