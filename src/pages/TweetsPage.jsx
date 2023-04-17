import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import CardGallery from '../components/CardList/CardGallery';
import { BtnLoadMore } from '../components/BtnLoadMore/BtnLoadMore';
import { fetchUsers } from '../services/API';
import BackButton from '../components/BackButton/BackButton';
import { LIMIT_CARDS } from '../utils/constants';

function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isHasUsers, setIsHasUsers] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLoadMore = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await fetchUsers(page);
        setUsers(prevUsers => [...prevUsers, ...response.data]);

        if (response.data.length < LIMIT_CARDS) {
          setIsHasUsers(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  return (
    <Container>
      <BackButton />
      <CardGallery users={users} />

      {isHasUsers === true && users.length > 0 && (
        <BtnLoadMore
          disabled={!isHasUsers}
          onLoadMore={onLoadMore}
          loading={loading}
        />
      )}
    </Container>
  );
}

export default TweetsPage;
