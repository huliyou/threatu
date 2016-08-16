import * as DesignListAction from '../actions/DesignListAction';
import * as Immutable from 'immutable';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  designs: Immutable.List([]),
});

const getDesignListHandler = new ActionHandler.handleAction(DesignListAction.GET_DESIGNLIST)
  .request(state => {
    return state
      .set('isFetching', true)
      .set('errMsg', '');
  })
  .success((state, action) => {
    return state
      .set('isFetching', false)
      .set('errMsg', '')
      .set('designs', Immutable.fromJS(action.data));
  })
  .failure((state, action) => {
    return state
      .set('isFetching', false)
      .set('errMsga', action.errMsg);
  });

export default ActionHandler.handleActions(
  [getDesignListHandler],
  defaultState,
  /^DesignListReducer/
);
