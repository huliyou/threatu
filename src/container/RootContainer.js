// 组合所有组件  root component

import React, { PropTypes } from 'react';
// import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
// import loginState from '../core/LoginState';
// import * as RoutingURL from '../core/RoutingURL/RoutingURL';


const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  login: PropTypes.any,
};

class RootContainer extends React.Component {
  componentWillMount() {
    // if (this.props.login) {
    //   this.props.dispatch(routeActions.push('/App'));
    // } else {
    //   this.props.dispatch(routeActions.push('/Login'));
    // }
    // if (userInfoStorage.getItem('apiToken')) {
    //   this.props.dispatch(routeActions.push(RoutingURL.App()));
    // } else {
    //   this.props.dispatch(routeActions.push(RoutingURL.Login()));
    // }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

RootContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(RootContainer);
