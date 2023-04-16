import { Route, Routes } from 'react-router-dom';
import TweetsPage from './pages/TweetsPage';
import Home from './pages/Home';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

function App() {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
      </Routes>
    </>
  );
}

export default App;
