import { Navigate, Route, Routes } from 'react-router-dom';
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
