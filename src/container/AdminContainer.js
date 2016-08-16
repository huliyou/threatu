/**
 * Created by leiyouwho on 16/4/2016.
 */


import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { View } from 'isomorphic';
// import TopBar from '../components/TopBar';
import Menus from '../components/Menus';
// import Panel from '../components/Panel';

import styles from '../assets/stylesheets/RootContainer.scss';

class AppContainer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <View className={styles.RootContainer}>
        <View className={styles.menuContainer}>
          <Menus />
        </View>
        <View className={styles.rightContainer}>
          <View className={styles.rightContent}>
            {this.props.children}
          </View>
        </View>
      </View>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
};

AppContainer.defaultProps = {};


export default AppContainer;
