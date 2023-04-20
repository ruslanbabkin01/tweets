import React, { useEffect, useState } from 'react';
import {
  AvatarBox,
  BtnFollow,
  CardUser,
  Followers,
  IconGoit,
  ImageAva,
  PhotoBox,
  Tweets,
} from './Card.styled';
import { updateFollowers } from '../../services/API';

function Card({ tweets, id, followers, avatar }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

  useEffect(() => {
    const following = localStorage.getItem(`following_${id}`);
    if (following !== null) {
      setIsFollowing(following === 'true');
    }
  }, [id]);

  const handleClick = async () => {
    setIsFollowing(!isFollowing);
    const newFollowerCount = isFollowing
      ? followerCount - 1
      : followerCount + 1;
    await updateFollowers(id, newFollowerCount);
    setFollowerCount(newFollowerCount);
    localStorage.setItem(`following_${id}`, !isFollowing);
  };

  return (
    <CardUser>
      <IconGoit />

      <AvatarBox>
        <PhotoBox>
          <ImageAva src={avatar} alt="avatar" />
        </PhotoBox>
      </AvatarBox>

      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followerCount.toLocaleString('en-US')} followers</Followers>

      <BtnFollow onClick={handleClick} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </BtnFollow>
    </CardUser>
  );
}

export default Card;
