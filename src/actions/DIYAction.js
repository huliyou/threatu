import { POSTJSON } from '../core/WS/WSHandler';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
// import NotificationCenter from '../common/NotificationCenter';
import * as URL from '../core/WS/URL';

export const UPLOAD_DIY: string = 'UPLOAD_DIY';

export const uploadDIY = (params) => (dispatch) => {
  AsyncFetchHandler(UPLOAD_DIY, POSTJSON(URL.DIYListPath, params), dispatch);
};
