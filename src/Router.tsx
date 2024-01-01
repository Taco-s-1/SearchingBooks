import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/:bookTitle"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
