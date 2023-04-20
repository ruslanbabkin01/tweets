import styled from '@emotion/styled';
import { ReactComponent as Icon } from '../../images/logo.svg';
import BgImage from '../../images/icon-bg.png';

export const CardUser = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  text-align: center;
  background-image: url(${BgImage}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: top 28px center, center;
  background-size: 308px 168px, 100%;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  ::before {
    content: '';
    margin-top: 214px;
    display: block;
    width: 100%;
    height: 8px;
    background-color: ${p => p.theme.colors.gray};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const IconGoit = styled(Icon)`
  position: absolute;
  top: 20px;
  left: 20px;
  fill: #fff;
  opacity: 0.3;
  height: 22px;
  width: 76px;
`;

export const AvatarBox = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.gray};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const PhotoBox = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${p => p.theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ImageAva = styled.img`
  width: 60px;
  height: 60px;
`;

export const Tweets = styled.p`
  text-transform: uppercase;
  color: ${p => p.theme.colors.gray};
  margin-top: 62px;
`;

export const Followers = styled.p`
  text-transform: uppercase;
  color: ${p => p.theme.colors.gray};
  margin-top: 16px;
`;

export const BtnFollow = styled.button`
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-family: inherit;
  font-size: ${p => p.theme.fontSize.m};
  line-height: 1.22;
  color: ${p => p.theme.colors.black};

  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 56px;
  margin: 0 auto;
  margin-top: 26px;

  width: 196px;
  height: 50px;

  background-color: ${p =>
    p.isFollowing ? p.theme.colors.green : p.theme.colors.gray};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.green};
    color: #eee;
  }
`;
