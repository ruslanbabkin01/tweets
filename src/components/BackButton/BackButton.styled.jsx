import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  color: #fff;
  background-color: ${p => p.theme.colors.blue};
  padding: 8px 20px;
  margin-top: 20px;
  margin-left: 40px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: auto;
  margin-bottom: 20px;
  :hover,
  :focus {
    color: #000000;
    background-color: ${p => p.theme.colors.green};
  }
`;
