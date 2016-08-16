import { connect } from 'react-redux';
import DIY from './DIY';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(DIY);
