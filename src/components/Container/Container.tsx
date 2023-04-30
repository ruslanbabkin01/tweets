import React from 'react';
import styled from 'styled-components';

const ContainerWrapp = styled.div`
  margin: 0 auto;
  width: 1280px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children } : ContainerProps ) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
