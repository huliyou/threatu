/**
 * Created by wl on 16/4/12.
 */
import React, { PropTypes } from 'react';
import { View, Text } from 'isomorphic';
import styles from '../../assets/stylesheets/Login/LoginHeader.scss';
import LOGO from '../../assets/images/LOGO.svg';
const propTypes = {
  slogan: PropTypes.string,
  icon: PropTypes.node,
};

const LoginHeader = (props) => {
  return (
    <View className={ styles.loginHeader }>
      <View className={ styles.icon }>
        <LOGO width="5rem" height="5rem" />
      </View>
      <Text className={styles.slogan}>{props.slogan}</Text>
    </View>
  );
};
LoginHeader.propTypes = propTypes;
export default LoginHeader;
