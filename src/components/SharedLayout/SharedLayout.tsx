import { Container, Header, StyledLink } from './SharedLayout.styled';

function SharedLayout() {
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
}

export default SharedLayout;
