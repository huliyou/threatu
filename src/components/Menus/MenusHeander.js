/**
 * Created by leiyouwho on 11/4/2016.
 */

import React from 'react';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Menus/MenusHeader.scss';
import LOGO from '../../assets/images/LOGO.svg';

const MenuHeader = () => {
  return (
    <View className={styles.MenusHeaderContainer}>
      <View><LOGO width="4rem" height="4rem" /></View>
      <View className={styles.sloganContainer}>
        <View className={styles.sloganTitle}>THREAT U</View>
        <View className={styles.sloganSubtitle}>后台运营系统</View>
      </View>
    </View>
  );
};

export default MenuHeader;
