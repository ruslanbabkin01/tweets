import React from 'react';
import Card from '../Card/Card';
import { CardList } from './CardGallery.styled';

function CardGallery({ users }) {
  return (
    <CardList>
      {users.map(({ user, tweets, id, followers, avatar }) => (
        <Card
          key={id}
          id={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      ))}
    </CardList>
  );
}

export default CardGallery;
