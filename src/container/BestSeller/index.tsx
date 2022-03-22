import React from 'react';
import './styles.scss';
import ProductCard from '../../components/ProductCard';

export default function BestSeller() {
  const products = [
    {
      name: 'Formal Dress Shirts Casual Long Sleeve Slim Fit',
      url: 'http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png'
    },
    {
      name: 'Formal Dress Shirts Casual Short Sleeve Slim Fit',
      url: 'http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png'
    },
    {
      name: 'Soft Summer Short Slim Fit',
      url: 'http://localhost:1234/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Gray.png'
    }
  ];

  return (
    <div className='best-seller-container'>
      <h2> Best Seller </h2>
      <div className='best-seller-products'>
        {products.map(({ name, url }) => (
          <ProductCard key={name} name={name} url={url} />
        ))}
      </div>
    </div>
  )
}
