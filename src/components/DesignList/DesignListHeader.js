import React from 'react';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Content/ContentHeader.scss';

class DesignListHeader extends React.Component {
  render() {
    return (
      <View className={ styles.contentHeader }>
        < View className={ styles.contentText }>
          设计列表
        </View>
      </View>
    );
  }
}

export default DesignListHeader;
