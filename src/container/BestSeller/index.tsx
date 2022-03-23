import { FC, useEffect } from 'react';
import './styles.scss';
import ProductCard from '../../components/ProductCard';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { BestSellerDispatchProps, BestSellerProps, BestSellerStateProps } from './interface';
import { StoreStateType } from '../../store/rootReducer';
import { ProductDetailsAction } from '../../store/actions/productDetailsAction';

const BestSeller: FC<BestSellerProps> = ({ fetchAllBestSellerProducts, bestSellerProducts }) => {
  // eslint-disable-next-line
  useEffect(() => {
    if(!bestSellerProducts.length) {
      fetchAllBestSellerProducts();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='best-seller-container'>
      <h2> Best Seller </h2>
      <div className='best-seller-products'>
        {bestSellerProducts.map(({ title, id, variants }) => (
          <ProductCard key={id} name={title} url={variants[0].image} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps: MapStateToProps<BestSellerStateProps, {}, StoreStateType> = (state) => {
  return {
    bestSellerProducts: state.productDetails.bestSellerProducts
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<BestSellerDispatchProps, {}> = (dispatch) => {
  const { fetchAllBestSellerProducts } = new ProductDetailsAction();

  return {
    fetchAllBestSellerProducts: () => dispatch(fetchAllBestSellerProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
