import styled from 'styled-components';

const ContainerWrapp = styled.div`
  margin: 0 auto;
  width: 1280px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
