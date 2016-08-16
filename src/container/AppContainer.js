import React, { PropTypes } from 'react';
import AppMenus from '../components/AppMenus';
import styles from '../assets/stylesheets/AppContainer.scss';

export default class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    return (
      <div className={styles.AppContainer} >
        <AppMenus />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
