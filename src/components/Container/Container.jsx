import styled from '@emotion/styled';

const ContainerWrapp = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
