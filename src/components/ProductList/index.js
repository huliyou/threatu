import ProductList from './ProductList';
import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  isFetching: state.ProductListReducer.get('isFetching'),
  errMsg: state.ProductListReducer.get('errMsg'),
  products: state.ProductListReducer.get('products'),
});
export default connect(mapStateToProps)(ProductList);
