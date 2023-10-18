import React from 'react';
import styled from 'styled-components';

const PageLayout = ({ children }) => {
  return (
    <>
      <MobileWrap>{children}</MobileWrap>
    </>
  );
};

const MobileWrap = styled.div`
  width: 360px;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  position: relative;
  padding: 0 8px;
`;

export default PageLayout;
