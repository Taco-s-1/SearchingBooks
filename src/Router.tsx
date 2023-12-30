import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/:bookid"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
