import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 1280px;
`;

export const Header = styled.header`
  display: flex;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    margin: 0 auto;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin: 0 40px;

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.green};
  }

  :hover,
  :focus {
    color: #000000;
    background-color: ${p => p.theme.colors.green};
  }
`;
