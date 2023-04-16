import styled from '@emotion/styled';

const ContainerWrapp = styled.div`
  margin: 40px auto;
  width: 1280px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
