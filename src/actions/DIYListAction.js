import { GET } from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
// import NotificationCenter from '../common/NotificationCenter';
import * as URL from '../core/WS/URL';

export const GET_DIYLIST: string = 'GET_DIYLIST';

export const getDIYList = (params) => (dispatch) => {
  AsyncFetchHandler(GET_DIYLIST, GET(URL.DIYListPath, params), dispatch);
};
