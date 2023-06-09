import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/API';
import { LIMIT_CARDS } from '../utils/constants';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ICard } from '../types/card';
import { BackButton, BtnLoadMore, CardGallery, Container } from '../components';

function TweetsPage() {
  const [users, setUsers] = useState<ICard[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isHasUsers, setIsHasUsers] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const onLoadMore = (): void => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      try {
        const response = await fetchUsers(page);
        setUsers(prevUsers => [...prevUsers, ...response.data]);

        if (response.data.length < LIMIT_CARDS) {
          setIsHasUsers(false);
        }
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        console.log(error.message);
        toast.error(error.message);
      }
    }
    getUsers();
  }, [page]);

  return (
    <Container>
      <BackButton />
      <CardGallery users={users} />

      {isHasUsers === true && users.length > 0 && (
        <BtnLoadMore onLoadMore={onLoadMore} loading={loading} />
      )}
    </Container>
  );
}

export default TweetsPage;
