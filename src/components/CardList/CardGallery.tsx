import { CardList } from './CardGallery.styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ICard } from '../../types/card';
import { useState, useMemo } from 'react';
import { SelectFilter, Card } from '../index';

interface ICardGalleryProps {
  users: ICard[];
}

function CardGallery({ users }: ICardGalleryProps) {
  const [followingArr, setFollowingArr] = useLocalStorage('followingArr', []);
  const [selectedOption, setSelectedOption] = useState({
    value: 'all',
    label: 'Show all',
  });

  const options = [
    { value: 'all', label: 'Show all' },
    { value: 'follow', label: 'Follow' },
    { value: 'followings', label: 'Followings' },
  ];

  function selectFollow(option: GroupBase) {
    setSelectedOption(option);
  }

  function removeId(id: string) {
    setFollowingArr((prevArr: string[]) =>
      followingArr.filter((clikedIds: string) => clikedIds !== id)
    );
  }

  function addId(id: string) {
    setFollowingArr((prevArr: string[]) => [...prevArr, id]);
  }

  const filteredUsers = useMemo(() => {
    switch (selectedOption.value) {
      case 'follow':
        return users.filter(user => followingArr.includes(user.id));
      case 'followings':
        return users.filter(user => !followingArr.includes(user.id));
      default:
        return users;
    }
  }, [users, followingArr, selectedOption]);

  return (
    <>
      <SelectFilter options={options} onChange={selectFollow} />
      <CardList>
        {filteredUsers.map(user => (
          <Card
            key={user.id}
            user={user}
            followingArr={followingArr}
            removeId={removeId}
            addId={addId}
          />
        ))}
      </CardList>
    </>
  );
}

export default CardGallery;
