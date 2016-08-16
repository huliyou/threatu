import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { Menu, Icon } from 'antd';
const Item = Menu.Item;
import styles from '../../assets/stylesheets/AppMenus/AppMenus.scss';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';

export default class AppMenus extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  state = {
    current: '1',
  };
  _handleClick(e) {
    this.setState({
      current: e.key,
    });
    if (e.key === '1') {
      this.props.dispatch(routeActions.push(RoutingURL.ProductGrid()));
    } else if (e.key === '2') {
      this.props.dispatch(routeActions.push(RoutingURL.UploadDesign()));
    }
  }
  render() {
    return (
      <div className={styles.AppMenusContainer} >
        <div className={styles.MenuTitle}>
          <Icon type="home" />
          <span style={{ marginLeft: '10px' }}>THREAT U</span>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={(e) => this._handleClick(e)}
          style={{
            flex: 1,
          }}
        >
          <Item key="1"><Icon type="appstore" /> 定制</Item>
          <Item key="2"><Icon type="pushpin" /> 设计</Item>
        </Menu>
      </div>
    );
  }
}
