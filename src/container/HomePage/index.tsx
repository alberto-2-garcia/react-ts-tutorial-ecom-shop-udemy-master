import React from 'react';
import Partners from '../../components/Partners';
import ShopQuality from '../../components/ShopQuality';
import BestSeller from '../BestSeller';
import './styles.scss';

export default function HomePage() {
  return (
    <div className='homepage-container'>
      <div className='cover-image'/>
      <ShopQuality />
      <BestSeller />
      <Partners />
    </div>
  )
}
