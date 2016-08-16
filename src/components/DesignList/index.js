import DesignList from './DesignList';
import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  isFetching: state.DesignListReducer.get('isFetching'),
  errMsg: state.DesignListReducer.get('errMsg'),
  designs: state.DesignListReducer.get('designs'),
});
export default connect(mapStateToProps)(DesignList);
