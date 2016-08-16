import { connect } from 'react-redux';
import UploadDesign from './UploadDesign';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(UploadDesign);
