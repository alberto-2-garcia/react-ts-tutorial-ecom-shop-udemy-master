import { FC } from 'react';
import './styles.scss';

const ShopQuality: FC = () => {
  return (
    <div className='shop-quality-container'>
      <div className='quality-item-container'>
        <div className='img-container support-local'/>
        <h3> Support Local </h3>
        <p> All materials come frome local producers. Together we can create a stronger and better community.</p>
      </div>
      <div className='quality-item-container'>
        <div className='img-container high-quality'/>
        <h3> High Quality </h3>
        <p> All materials come frome local producers. Together we can create a stronger and better community.</p>
      </div>
      <div className='quality-item-container'>
        <div className='img-container eco-friendly'/>
        <h3> Eco Friendly </h3>
        <p> All materials come frome local producers. Together we can create a stronger and better community.</p>
      </div>
    </div>
  )
}

export default ShopQuality;
