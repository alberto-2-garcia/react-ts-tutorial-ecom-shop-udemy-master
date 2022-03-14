import { FC } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/route';

const HeaderNavigation: FC = () => {
  return (
    <div className='header-nav-container'>
      <div className='nav-items-left'>
        <Link className='nav-item shopname' to={ROUTE.HOME}>Shopspree</Link>
        <Link className='nav-item' to={ROUTE.ALL_PRODUCTS}>All products</Link>
      </div>
      <div className='nav-items-right'>
        <i className='nav-item fa fa-shopping-cart'></i>
      </div>
    </div>
  )
}

export default HeaderNavigation;
