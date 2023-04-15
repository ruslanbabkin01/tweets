import { ThreeCircles } from 'react-loader-spinner';
import styled from '@emotion/styled';

export const Loader = () => (
  <Box>
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </Box>
);

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
