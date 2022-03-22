import { call, put, takeLatest } from 'redux-saga/effects';
import ProductsDetailsAPI from '../../api/productsDetailsAPI';
import { ProductDetailsAction } from '../actions/productDetailsAction';
import { ProductDetails } from '../reducers/productDetailsReducer';

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

function* workerFetchProductDetailsSaga() {
  const productsDetailsAPI = new ProductsDetailsAPI();
  const productDetailsAction = new ProductDetailsAction();
  try {
    const response: ResponseGenerator = yield call(productsDetailsAPI.getProducts);
    const productDetails = response.data as ProductDetails;
  
    yield put(productDetailsAction.set(productDetails));
  } catch(err) {
    // TODO: Change in the future
    console.log('err')
  }

}

export function* watchProductDetailsSaga() {
  yield takeLatest(ProductDetailsAction.FETCH_PRODUCTS_DETAILS, workerFetchProductDetailsSaga);
}
