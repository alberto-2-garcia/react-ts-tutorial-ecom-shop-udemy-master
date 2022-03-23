import { call, put, takeLatest } from 'redux-saga/effects';
import ProductsDetailsAPI from '../../api/productsDetailsAPI';
import { ProductDetailsAction, FetchShopProductsAction } from '../actions/productDetailsAction';
import { ShopProducts } from '../reducers/productDetailsReducer';

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

function* workerFetchShopProductsSaga(action: FetchShopProductsAction) {
  const productsDetailsAPI = new ProductsDetailsAPI();
  const productDetailsAction = new ProductDetailsAction();
  try {
    const response: ResponseGenerator = yield call(productsDetailsAPI.getProducts, action.options);
    const shopProducts = response.data as ShopProducts;
  
    yield put(productDetailsAction.setShopProducts(shopProducts));
  } catch(err) {
    // TODO: Change in the future
    console.log('err')
  }
}

function* workerFetchBestSellerSaga() {
  const productsDetailsAPI = new ProductsDetailsAPI();
  const productDetailsAction = new ProductDetailsAction();
  try {
    const response: ResponseGenerator = yield call(productsDetailsAPI.getProducts, { category: ['Best Seller'] });
    const { products } = response.data as ShopProducts;
  
    yield put(productDetailsAction.setBestSellerProducts(products));
  } catch(err) {
    // TODO: Change in the future
    console.log('err')
  }
}

export function* watchProductDetailsSaga() {
  yield takeLatest(ProductDetailsAction.FETCH_SHOP_PRODUCTS, workerFetchShopProductsSaga);
  yield takeLatest(ProductDetailsAction.FETCH_ALL_BEST_SELLER_PRODUCTS, workerFetchBestSellerSaga);
}
