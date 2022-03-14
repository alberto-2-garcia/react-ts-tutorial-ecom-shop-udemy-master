import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './container/HomePage';
import { ROUTE } from './constants/route';
import CheckoutPage from './container/CheckoutPage';
import AllProductsPage from './container/AllProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.ALL_PRODUCTS}  element={<AllProductsPage />}/>
        <Route path={ROUTE.CHECKOUT}      element={<CheckoutPage />}/>
        <Route path={ROUTE.HOME}          element={<HomePage />}/>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
