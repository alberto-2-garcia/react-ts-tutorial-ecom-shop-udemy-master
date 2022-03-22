import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './container/HomePage';
import { ROUTE } from './constants/route';
import CheckoutPage from './container/CheckoutPage';
import AllProductsPage from './container/AllProductsPage';
import HeaderNavigation from './components/HeaderNavigation';
import { createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
