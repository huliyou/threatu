/**
 * Happy Hacking
 * Created by leiyouwho on 3/5/2016.
 */

import * as FetchState from './FetchState';
import { routeActions } from 'react-router-redux';
// import NotificationCenter from '../common/NotificationCenter';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';


const AsyncFetchHandler = (
  actionName: string,
  fetchResultPromise: Promise,
  dispatch: Function
) => {
  dispatch({
    type: FetchState.REQUEST(actionName),
  });
  fetchResultPromise
    .then(data => {
      if (data.code === 0) {
        dispatch({
          type: FetchState.SUCCESS(actionName),
          data: data.data,
        });
      } else if (data.code === 5000) {
        dispatch(routeActions.push(RoutingURL.Login()));
      } else {
        // NotificationCenter.NotificationCard(
        //   `${actionName}请求失败`,
        //   `错误信息: ${JSON.stringify(data.message)}`,
        //   'error',
        //   2,
        // );
        dispatch({
          type: FetchState.FAILURE(actionName),
          errMsg: data.message,
        });
      }
    })
    .catch(err => {
      console.warn(err);
      dispatch({
        type: FetchState.FAILURE(actionName),
        errMsg: err.message,
      });
    });
};

export default AsyncFetchHandler;
