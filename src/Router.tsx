import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import OnBoarding from './pages/OnBoarding';

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoarding />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/:bookTitle"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
