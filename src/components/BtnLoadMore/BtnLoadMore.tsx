import Loader from '../Loader';
import { Btn } from './BtnLoadMore.styled';

interface BtnLoadMoreProps {
  onLoadMore: () => void;
  loading: boolean;
}

function BtnLoadMore({ onLoadMore, loading }: BtnLoadMoreProps) {
  return (
    <>{loading ? <Loader /> : <Btn onClick={onLoadMore}>Load more</Btn>}</>
  );
}

export default BtnLoadMore;
