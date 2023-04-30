import Card from '../Card/Card';
import { CardList } from './CardGallery.styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ICard } from '../../types/card';

interface ICardGalleryProps {
  users: ICard[];
}

function CardGallery  ({ users } : ICardGalleryProps ) {
  const [followingArr, setFollowingArr] = useLocalStorage('followingArr', []);

  function removeId(id: string) {
    setFollowingArr((prevArr: string[]) => followingArr.filter((clikedIds: string) => clikedIds !== id));
  }

  function addId(id: string) {
    setFollowingArr((prevArr: string[]) => [...prevArr, id]);
  }

  return (
    <CardList>
      {users.map((user) => (
        <Card
          key={user.id}
          user={user}
          followingArr={followingArr}
          removeId={removeId}
          addId={addId}
        />
      ))}
    </CardList>
  );
}

export default CardGallery;
