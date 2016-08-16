import React, { PropTypes } from 'react';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Content/ContentHeader.scss';
import Immutable from 'immutable';

class DIYsListHeader extends React.Component {
  static propTypes = {
    createEMRAction: PropTypes.func.isRequired,
    doctorStudios: PropTypes.instanceOf(Immutable.List).isRequired,
  };
  render() {
    return (
      <View className={ styles.contentHeader }>
        < View className={ styles.contentText }>
          DIY列表
        </View>
        { /* <View className={ styles.contentButton }>
          <Button
            type="primary"
            className={ mainStyles.blueButton }
          >
            新建档案
          </Button>
        </View> */ }
      </View>
    );
  }
}

export default DIYsListHeader;
