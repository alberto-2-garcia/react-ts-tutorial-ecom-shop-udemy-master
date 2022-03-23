import { FC } from 'react';
import './styles.scss';
import { connect, MapStateToProps } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { StoreStateType } from '../../store/rootReducer'
import { AllProductsOwnProps, AllProductsPageProps, AllProductsStateProps } from './interface'

const AllProductsPage: FC<AllProductsPageProps> = ({ productDetails }) => {
  return (
    <div className='all-products-page-container'>
      {productDetails.products.map(({ title, variants, id}) => (
        <div key={id} className='product-item-container'>
          <ProductCard url={variants[0].image} name={title} />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps: MapStateToProps<AllProductsStateProps, AllProductsOwnProps, StoreStateType> = (state) => {
  return {
    productDetails: state.productDetails
  }
}

export default connect(mapStateToProps)(AllProductsPage);
