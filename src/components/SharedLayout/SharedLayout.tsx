import React from 'react';
import { Container, Header, StyledLink } from './SharedLayout.styled';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </nav>
      </Header>
    </Container>
  );
};

export default SharedLayout;
