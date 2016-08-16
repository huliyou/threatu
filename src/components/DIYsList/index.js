import DIYsList from './DIYsList';
import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  isFetching: state.DIYsListReducer.get('isFetching'),
  errMsg: state.DIYsListReducer.get('errMsg'),
  DIYs: state.DIYsListReducer.get('DIYs'),
});
export default connect(mapStateToProps)(DIYsList);
