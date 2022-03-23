import { FC, useEffect } from 'react';
import './styles.scss';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { StoreStateType } from '../../store/rootReducer'
import { AllProductsDispatchToProps, AllProductsOwnProps, AllProductsPageProps, AllProductsStateProps } from './interface'
import { ProductDetailsAction } from '../../store/actions/productDetailsAction';

const AllProductsPage: FC<AllProductsPageProps> = ({ shopProducts, fetchShopProducts }) => {
  // eslint-disable-next-line
  useEffect(() => {
    if (!shopProducts.products.length) {
      fetchShopProducts({});
    }
  }, []);

  return (
    <div className='all-products-page-container'>
      {shopProducts.products.map(({ title, variants, id }) => (
        <div key={id} className='product-item-container'>
          <ProductCard url={variants[0].image} name={title} />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps: MapStateToProps<AllProductsStateProps, AllProductsOwnProps, StoreStateType> = (state) => {
  return {
    shopProducts: state.productDetails.shopProducts
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<AllProductsDispatchToProps, AllProductsOwnProps> = (dispatch) => {
  const { fetchShopProducts } = new ProductDetailsAction();
  return {
    fetchShopProducts: (options) => dispatch(fetchShopProducts(options))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);
