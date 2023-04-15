import { useEffect, useState } from 'react';
import CardGallery from './components/CardList/CardGallery';
import Container from './components/Container/Container';
import { BtnLoadMore } from './components/BtnLoadMore/BtnLoadMore';
import { fetchUsers } from './services/API';
// import users from './db/users.json';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const onLoadMore = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetchUsers(page);
        setUsers(prevUsers => [...prevUsers, ...response.data]);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [page]);

  return (
    <Container>
      <CardGallery users={users} />
      <BtnLoadMore onClick={onLoadMore} />
    </Container>
  );
}

export default App;
