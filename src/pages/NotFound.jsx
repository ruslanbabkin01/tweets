import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorText = styled.p`
  font-size: 24px;
  text-align: center;
  padding: 24px;
`;

export const ErrorLink = styled(Link)`
  color: blue;
`;

export default function NotFound() {
  return (
    <ErrorText>
      This page was not found, please return to
      <ErrorLink to="/">Home page</ErrorLink>
    </ErrorText>
  );
}
