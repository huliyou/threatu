import { connect } from 'react-redux';
import ProductGrid from './ProductGrid';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  products: state.ProductListReducer.get('products'),
});

export default connect(mapStateToProps)(ProductGrid);
