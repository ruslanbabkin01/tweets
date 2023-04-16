import { Btn } from './BtnLoadMore.styled';
import { Loader } from '../Loader';

export const BtnLoadMore = ({ onLoadMore, loading }) => (
  <>{loading ? <Loader /> : <Btn onClick={onLoadMore}>Load more</Btn>}</>
);
