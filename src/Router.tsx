import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path="/search"></Route>
          <Route path="/:bookid"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
