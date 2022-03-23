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

function* workerFetchProductDetailsSaga(action: FetchShopProductsAction) {
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

export function* watchProductDetailsSaga() {
  yield takeLatest(ProductDetailsAction.FETCH_SHOP_PRODUCTS, workerFetchProductDetailsSaga);
}
