/**
 * Created by wl on 16/4/14.
 */

import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DIYsListHeader from './DIYsListHeader';
import DIYsListTable from './DIYsListTable';

import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Content/ContentList.scss';
import * as DIYListAction from '../../actions/DIYListAction';
import amumu from 'amumu';

@amumu.decorators.Loading
class DIYsList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    DIYs: PropTypes.instanceOf(Immutable.List),
  };
  componentWillMount() {
    this.props.dispatch(DIYListAction.getDIYList());
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <View className={ styles.contentList }>
        <View className={ styles.contentListHeader }>
          <DIYsListHeader />
        </View>
        <View className={ styles.contentListContent }>
          <View className={ styles.contentListTable }>
            <DIYsListTable DIYs={this.props.DIYs} />
          </View>
        </View>
      </View>
    );
  }
}

export default DIYsList;
