import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './container/HomePage';
import { ROUTE } from './constants/route';
import CheckoutPage from './container/CheckoutPage';
import AllProductsPage from './container/AllProductsPage';
import HeaderNavigation from './components/HeaderNavigation';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <HeaderNavigation />
        <Routes>
          <Route path={ROUTE.ALL_PRODUCTS}  element={<AllProductsPage />}/>
          <Route path={ROUTE.CHECKOUT}      element={<CheckoutPage />}/>
          <Route path={ROUTE.HOME}          element={<HomePage />}/>
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
