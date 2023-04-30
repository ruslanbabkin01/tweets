import { Container } from '../components/SharedLayout/SharedLayout.styled';
import { Caption, Text } from './Home.styled';

function Home() {
  return (
    <Container>
      <Caption>Hello my friend!</Caption>
      <Text>
        This is an application where you can follow interesting people
      </Text>
    </Container>
  );
}

export default Home;


