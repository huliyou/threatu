import { GET } from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import * as URL from '../core/WS/URL';

export const GET_PRODUCTLIST: string = 'GET_PRODUCTLIST';
export const getProductList = (params) => (dispatch) => {
  AsyncFetchHandler(GET_PRODUCTLIST, GET(URL.ProductListPath, params), dispatch);
};
