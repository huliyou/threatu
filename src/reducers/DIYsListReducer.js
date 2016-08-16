import * as DIYListAction from '../actions/DIYListAction';
import Immutable from 'immutable';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  DIYs: Immutable.List([]),
});

const getDIYListHandler = new ActionHandler.handleAction(DIYListAction.GET_DIYLIST)
  .request(state => {
    return state
      .set('isFetching', true)
      .set('errMsg', '');
  })
  .success((state, action) => {
    return state
      .set('isFetching', false)
      .set('errMsg', '')
      .set('DIYs', Immutable.fromJS(action.data));
  })
  .failure((state, action) => {
    return state
      .set('isFetching', false)
      .set('errMsg', action.errMsg);
  });

export default ActionHandler.handleActions(
  [getDIYListHandler],
  defaultState,
  /^DIYsListReducer\//
);
