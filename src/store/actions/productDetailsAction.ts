import { ProductDetails } from "../reducers/productDetailsReducer";

export type ProductDetailsReducerAction = ProductDetailsFetchAction | ProductDetailsSetAction;

export interface ProductDetailsSetAction {
  type: typeof ProductDetailsAction.SET_PRODUCTS_DETAILS;
  productDetails: ProductDetails;
}

export interface ProductDetailsFetchAction {
  type: typeof ProductDetailsAction.FETCH_PRODUCTS_DETAILS;
}

export class ProductDetailsAction {
  static readonly FETCH_PRODUCTS_DETAILS = 'FETCH_PRODUCTS_DETAILS';
  static readonly SET_PRODUCTS_DETAILS = 'SET_PRODUCTS_DETAILS';

  fetch = (): ProductDetailsFetchAction => {
    return {
      type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS
    }
  }

  set = (productDetails: ProductDetails): ProductDetailsSetAction => {
    return {
      type: ProductDetailsAction.SET_PRODUCTS_DETAILS,
      productDetails
    }
  }
}
