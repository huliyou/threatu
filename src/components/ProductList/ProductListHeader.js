import React, { PropTypes } from 'react';
import { Button, Modal, Form, Radio } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Content/ContentHeader.scss';
import mainStyles from '../../assets/stylesheets/main.scss';
import Immutable from 'immutable';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class PatientListHeader extends React.Component {
  static propTypes = {
    createEMRAction: PropTypes.func.isRequired,
    doctorStudios: PropTypes.instanceOf(Immutable.List).isRequired,
  };
  render() {
    return (
      <View className={ styles.contentHeader }>
        < View className={ styles.contentText }>
          产品列表
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

export default PatientListHeader;
