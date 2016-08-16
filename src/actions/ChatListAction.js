/**
 * Created by wangxiaodan on 16/4/27.
 */

import { GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';

export const GET_CHATLIST = 'GET_CHATLIST';
export const getChatList = (params: Object, current: number) => (dispatch: Function) => {
  const localParams = Object.assign(params, { page: current });
  AsyncFetchHandler(GET_CHATLIST, GET(URL.getChatListPath, localParams), dispatch);
};

export const GET_CHATHISTORY = 'GET_CHATHISTORY';
export const getChatHistory = (params: Object) => (dispatch: Function) => {
  AsyncFetchHandler(GET_CHATHISTORY, GET(URL.getChatHistoryPath, params), dispatch);
};
