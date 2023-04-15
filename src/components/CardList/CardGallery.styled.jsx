import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin: 50px 0;

  ${props => props.theme.mq.desktop} {
  }
`;
