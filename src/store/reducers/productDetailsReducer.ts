import { AnyAction, Reducer } from "redux";
import { ProductDetailsAction, ProductDetailsReducerAction } from "../actions/productDetailsAction";

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  price: string;
  discount?: string;
  image: string;
}

export interface Product {
  id: string;
  category: string[];
  title: string;
  isBestSeller?: boolean;
  variants: ProductVariant[];
}

export interface ProductDetails {
  products: Product[];
  page?: number;
  nextPage?: boolean;
  producstCount: number;
}

const producstDetailsInitialState: ProductDetails = {
  products: [],
  producstCount: 0
}

export const productDetailsReducer: Reducer<ProductDetails, ProductDetailsReducerAction> = (state = producstDetailsInitialState, action) => {
  switch(action.type) {
    case ProductDetailsAction.SET_PRODUCTS_DETAILS:
      return action.productDetails;
    default:
      return state;
  }
}
