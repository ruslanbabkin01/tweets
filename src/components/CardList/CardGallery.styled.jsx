import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;

  margin-bottom: 20px;

  ${props => props.theme.mq.desktop} {
  }
`;
