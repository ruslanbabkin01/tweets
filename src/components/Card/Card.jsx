import React, { useEffect, useState } from 'react';
import {
  AvatarBox,
  BgImage,
  BtnFollow,
  CardUser,
  Followers,
  IconGoit,
  ImageAva,
  Line,
  PhotoBox,
  Tweets,
} from './Card.styled';
import Image from '../../images/icon-bg.png';
import { updateFollowers } from '../../services/API';

function Card({ user, tweets, id, followers, avatar }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

  useEffect(() => {
    const count = localStorage.getItem('followerCount');
    if (count) {
      setFollowerCount(parseInt(count));
    }
    const following = localStorage.getItem('isFollowing');
    if (following) {
      setIsFollowing(following === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('followerCount', followerCount.toString());
    localStorage.setItem('isFollowing', isFollowing.toString());
  }, [followerCount, isFollowing]);

  const handleClick = async () => {
    setIsFollowing(!isFollowing);
    await updateFollowers(id, followerCount);

    if (isFollowing) {
      setFollowerCount(prevCount => prevCount - 1);
    } else {
      setFollowerCount(prevCount => prevCount + 1);
    }
  };

  return (
    <CardUser>
      <IconGoit />

      <BgImage src={Image} alt="bg-image" />
      <Line />
      <AvatarBox>
        <PhotoBox>
          <ImageAva src={avatar} alt="avatar" />
        </PhotoBox>
      </AvatarBox>

      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followers} followers</Followers>

      <BtnFollow onClick={handleClick} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </BtnFollow>
    </CardUser>
  );
}

export default Card;
