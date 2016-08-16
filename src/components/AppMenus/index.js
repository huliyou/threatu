import { connect } from 'react-redux';
import AppMenus from './AppMenus';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(AppMenus);
