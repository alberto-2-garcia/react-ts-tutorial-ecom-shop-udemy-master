import { FC } from 'react';
import './styles.scss';
import { ProductCardProps } from './interface';

const ProductCard: FC<ProductCardProps> = ({ url, name}) => {
  return (
    <div className='product-card-container'>
      <div style={{ backgroundImage: `url(${url})` }} className='product-image'/>
      <div className='product-details'>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default ProductCard;
