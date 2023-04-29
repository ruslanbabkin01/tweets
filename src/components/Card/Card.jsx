import { useState } from 'react';
import {
  BtnFollow,
  CardUser,
  Followers,
  IconGoit,
  ImageAva,
  PhotoBox,
  Tweets,
} from './Card.styled';
import { updateFollowers } from '../../services/API';

function Card({
  tweets,
  id,
  followers,
  avatar,
  followingArr,
  addId,
  removeId,
}) {
  const [isFollowing, setIsFollowing] = useState(followingArr.includes(id));
  const [followerCount, setFollowerCount] = useState(followers);

  const handleClick = async () => {
    setIsFollowing(!isFollowing);
    const newFollowerCount = isFollowing
      ? followerCount - 1
      : followerCount + 1;
    await updateFollowers(id, newFollowerCount);
    setFollowerCount(newFollowerCount);

    isFollowing ? removeId(id) : addId(id);
  };

  return (
    <CardUser>
      <IconGoit />

      <PhotoBox>
        <ImageAva src={avatar} alt="avatar" />
      </PhotoBox>

      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followerCount.toLocaleString('en-US')} followers</Followers>

      <BtnFollow onClick={handleClick} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </BtnFollow>
    </CardUser>
  );
}

export default Card;
