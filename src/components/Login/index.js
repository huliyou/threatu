// import React from 'react';
// import Login from './Login';
//
// const LoginView = () => {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// };
//
// export default connect(mapStateToProps)(Login);

import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(Login);
