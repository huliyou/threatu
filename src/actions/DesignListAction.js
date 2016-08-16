import { GET } from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import * as URL from '../core/WS/URL';

export const GET_DESIGNLIST: string = 'GET_DESIGNLIST';

export const getDesignList = (params) => (dispatch) => {
  AsyncFetchHandler(GET_DESIGNLIST, GET(URL.DesignListPath, params), dispatch);
};
