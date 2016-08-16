/**
 * Created by wl on 16/4/14.
 */

import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import ProductListHeader from './ProductListHeader';
import ProductListTable from './ProductListTable';

import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Content/ContentList.scss';
import * as ProductListAction from '../../actions/ProductListAction';
import { routeActions } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.decorators.Loading
class PatientList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    products: PropTypes.instanceOf(Immutable.List),
  };
  constructor(props) {
    super(props);
    this.state = {
      params: {},
      current: 1,
    };
  }
  componentWillMount() {
    this.props.dispatch(ProductListAction.getProductList());
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <View className={ styles.contentList }>
        <View className={ styles.contentListHeader }>
          <ProductListHeader />
        </View>
        <View className={ styles.contentListContent }>
          <View className={ styles.contentListTable }>
            <ProductListTable products={this.props.products} />
          </View>
          { /*<View className={ styles.pageNav }>
            <PageNav />
          </View>*/ }
        </View>
      </View>
    );
  }
}

export default PatientList;
