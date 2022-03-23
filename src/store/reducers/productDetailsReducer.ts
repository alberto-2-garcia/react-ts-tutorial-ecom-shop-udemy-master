import { Reducer } from "redux";
import { ProductDetailsAction, ProductDetailsReducerAction } from "../actions/productDetailsAction";
import update from 'immutability-helper';

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
  variants: ProductVariant[];
}

export interface ShopProducts {
  products: Product[];
  page?: number;
  nextPage?: boolean;
  producstCount: number;
  totalPages?: number;
}

export interface ProductDetails {
  shopProducts: ShopProducts
}

const producstDetailsInitialState: ProductDetails = {
  shopProducts: {
    products: [],
    producstCount: 0
  }
}

export const productDetailsReducer: Reducer<ProductDetails, ProductDetailsReducerAction> = (state = producstDetailsInitialState, action) => {
  switch(action.type) {
    case ProductDetailsAction.SET_SHOP_PRODUCTS:
      return update(state, { shopProducts: { $set : action.shopProducts } });
      
    default:
      return state;
  }
}
