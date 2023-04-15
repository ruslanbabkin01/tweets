import { Btn } from './BtnLoadMore.styled';
import { Loader } from '../Loader';

export const BtnLoadMore = ({ onLoadMore, status }) => (
  <>
    {status === 'pending' ? (
      <Loader />
    ) : (
      <Btn onClick={onLoadMore}>Load more</Btn>
    )}
  </>
);
