/**
 * Created by leiyouwho on 11/4/2016.
 */


import React, { PropTypes } from 'react';
import shalloCompare from 'react-addons-shallow-compare';
import { View } from 'isomorphic';
import { Menu, Icon } from 'antd';
import MenusHeader from './MenusHeander';
import { routeActions } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

class Menus extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  state = {
    current: '1',
  };
  shouldComponentUpdate(nextProps, nextState) {
    return shalloCompare(this, nextProps, nextState);
  }
  _handleClick(e) {
    this.setState({
      current: e.key,
    });
    if (e.key === '1') {
      this.props.dispatch(routeActions.push(RoutingURL.ProductList()));
    } else if (e.key === '2') {
      this.props.dispatch(routeActions.push(RoutingURL.DIYsList()));
    } else if (e.key === '3') {
      this.props.dispatch(routeActions.push(RoutingURL.DesignList()));
    } else if (e.key === '4') {
      this.props.dispatch(routeActions.push(RoutingURL.RecordList()));
    } else if (e.key === '6') {
      this.props.dispatch(routeActions.push(RoutingURL.Statistics()));
    } else if (e.key === '8') {
      this.props.dispatch(routeActions.push(RoutingURL.HospitalList()));
    } else if (e.key === '9') {
      this.props.dispatch(routeActions.push(RoutingURL.FirstDepartmentList()));
    } else if (e.key === '10') {
      this.props.dispatch(routeActions.push(RoutingURL.SecondDepartmentList()));
    } else if (e.key === '11') {
      this.props.dispatch(routeActions.push(RoutingURL.HDFP()));
    } else if (e.key === '12') {
      this.props.dispatch(routeActions.push(RoutingURL.AllStatistics()));
    } else if (e.key === '13') {
      this.props.dispatch(routeActions.push(RoutingURL.StudioStatistics()));
    } else if (e.key === '14') {
      this.props.dispatch(routeActions.push(RoutingURL.sendGroup()));
    }
  }
  render() {
    return (
      <View>
        <MenusHeader />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          theme="dark"
          onClick={(e) => this._handleClick(e)}
          mode="inline"
        >
          <Item key="1"><Icon type="appstore" />产品列表</Item>
          <Item key="2"><Icon type="picture" />DIY列表</Item>
          <Item key="3"><Icon type="lock" />设计列表</Item>
        </Menu>
      </View>
    );
  }
}


export default Menus;
