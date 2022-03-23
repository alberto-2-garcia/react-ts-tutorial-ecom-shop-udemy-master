import { RouteProps } from 'react-router-dom';
import { GetProductsOptions } from '../../api/productsDetailsAPI';
import { FetchShopProductsAction } from '../../store/actions/productDetailsAction';
import { ShopProducts } from "../../store/reducers/productDetailsReducer";

export interface AllProductsStateProps {
  shopProducts: ShopProducts
}

export interface AllProductsOwnProps extends RouteProps {}

export interface AllProductsDispatchToProps {
  fetchShopProducts(options: GetProductsOptions): FetchShopProductsAction;
}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps & AllProductsDispatchToProps;
