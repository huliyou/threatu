/**
 * Created by wl on 16/4/14.
 */

import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DesignListHeader from './DesignListHeader';
import DesignListTable from './DesignListTable';

import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Content/ContentList.scss';
import * as DesignListAction from '../../actions/DesignListAction';
import amumu from 'amumu';

@amumu.decorators.Loading
class DesignList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    designs: PropTypes.instanceOf(Immutable.List),
  };
  componentWillMount() {
    this.props.dispatch(DesignListAction.getDesignList());
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <View className={ styles.contentList }>
        <View className={ styles.contentListHeader }>
          <DesignListHeader />
        </View>
        <View className={ styles.contentListContent }>
          <View className={ styles.contentListTable }>
            <DesignListTable designs={this.props.designs} />
          </View>
        </View>
      </View>
    );
  }
}

export default DesignList;
