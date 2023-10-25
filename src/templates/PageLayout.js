import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const PageLayout = ({ children }) => {
  return (
    <>
      <MobileWrap>{children}</MobileWrap>
    </>
  );
};

const MobileWrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  position: relative;
  padding: 0 8px;

  @media ${theme.mobile} {
    width: 360px;
  }
`;

export default PageLayout;
