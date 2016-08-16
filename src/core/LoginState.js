/**
 * @flow
 * Created by leiyouwho on 16/4/2016.
 */
import { routeActions } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';


const loginState = (login: boolean, dispatch: Function) => {
  if (!login) {
    dispatch(routeActions.push(RoutingURL.Login()));
  }
};

export default loginState;
