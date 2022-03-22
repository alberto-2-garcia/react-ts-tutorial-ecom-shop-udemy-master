import React from 'react';
import ShopQuality from '../../components/ShopQuality';
import './styles.scss';

export default function HomePage() {
  return (
    <div className='homepage-container'>
      <div className='cover-image'/>
      <ShopQuality />
    </div>
  )
}
