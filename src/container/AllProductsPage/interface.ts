import { RouteProps } from 'react-router-dom';
import { ProductDetails } from "../../store/reducers/productDetailsReducer";

export interface AllProductsStateProps {
  productDetails: ProductDetails
}

export interface AllProductsOwnProps extends RouteProps {}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps;
