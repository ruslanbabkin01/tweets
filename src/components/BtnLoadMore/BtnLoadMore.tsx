import { Btn } from './BtnLoadMore.styled';
import { Loader } from '../Loader';

interface BtnLoadMoreProps {
  onLoadMore: () => void;
  loading: boolean;
}

const BtnLoadMore = ({ onLoadMore, loading  }: BtnLoadMoreProps) => (
  <>{loading ? <Loader /> : <Btn onClick={onLoadMore}>Load more</Btn>}</>
);


export default BtnLoadMore;