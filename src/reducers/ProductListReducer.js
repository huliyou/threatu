import * as ProductListAction from '../actions/ProductListAction';
import Immutable from 'immutable';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  products: Immutable.List([]),
});

const getProductListHandler = new ActionHandler.handleAction(ProductListAction.GET_PRODUCTLIST)
  .request((state) => {
    return state
      .set('isFetching', true)
      .set('errMsg', '');
  })
  .success((state, action) => {
    return state
      .set('isFetching', false)
      .set('errMsg', '')
      .set('products', Immutable.fromJS(action.data));
  })
  .failure((state, action) => {
    return state
      .set('isFetching', false)
      .set('errMsg', action.errMsg);
  });

export default ActionHandler.handleActions(
  [getProductListHandler],
  defaultState,
  /^ProductListReducer\//
);
