import { GET } from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import * as URL from '../core/WS/URL';

export const GET_PRODUCT_GRID = 'GET_PRODUCT_GRID';

export const getProductGrid = (params) => (dispatch) => {
  AsyncFetchHandler(GET_PRODUCT_GRID, GET(URL.ProductListPath, params), dispatch);
};
