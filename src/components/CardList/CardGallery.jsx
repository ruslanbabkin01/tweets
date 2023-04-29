import Card from '../Card/Card';
import { CardList } from './CardGallery.styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function CardGallery({ users }) {
  const [followingArr, setFollowingArr] = useLocalStorage('followingArr', []);

  function removeId(id) {
    setFollowingArr(prevArr => prevArr.filter(clikedIds => clikedIds !== id));
  }

  function addId(id) {
    setFollowingArr(prevArr => [...prevArr, id]);
  }

  return (
    <CardList>
      {users.map(({ tweets, id, followers, avatar }) => (
        <Card
          key={id}
          id={id}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          followingArr={followingArr}
          removeId={removeId}
          addId={addId}
        />
      ))}
    </CardList>
  );
}

export default CardGallery;
