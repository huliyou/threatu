import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// 引入各reducers
import ProductListReducer from './ProductListReducer';
import DIYsListReducer from './DIYsListReducer';
import DesignListReducer from './DesignListReducer';


// 状态入口
const appReducers = combineReducers({
  routing: routeReducer,
  ProductListReducer,
  DIYsListReducer,
  DesignListReducer,
});

export default appReducers;
