import { useDispatch, useSelector } from 'react-redux';
import { asyncPreload } from './states/isPreload/action';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { LeaderboardsPages } from './pages/LeaderboardsPages';
import { NavbarDefault } from './components/Navbar';
import { AddThreadPages } from './pages/AddThreadPages';
import Loading from './components/Loading';
import React from 'react';
function App() {
  const isPreload = useSelector((state) => state.isPreload);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreload());
  }, [dispatch]);

  if (isPreload) {
    return (
      null
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 gap-y-3">
      <Loading />
      <NavbarDefault />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/leaderboards" element={<LeaderboardsPages />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/thread/:id" element={<DetailPage />} />
        <Route path="/new" element={<AddThreadPages />} />
      </Routes>
    </div>
  );
}

export default App;
