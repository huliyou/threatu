/**
 * Created by wl on 16/4/15.
 */

import React, { PropTypes } from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Content/ContentList.scss';

class DesignListTable extends React.Component {
  static propTypes = {
    designs: PropTypes.instanceOf(Immutable.List),
  };
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '淘宝ID',
      dataIndex: 'taobaoID',
      key: 'taobaoID',
    }, {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '邮件',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '图片',
      dataIndex: 'imgURL',
      key: 'imgURL',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    datas.forEach((value, key) => {
      dataSource.push({
        key,
        taobaoID: value.get('taobaoID'),
        phone: value.get('phone'),
        email: value.get('email'),
        imgURL: <img style={{ height: 100 }} src={value.get('imgURL')} />,
      });
    });
    return dataSource;
  }
  render() {
    return (
      <View>
        <Table
          size="middle"
          columns={this.columns}
          dataSource={this._renderDataSource(this.props.designs)}
          pagination={false}
          bordered
          rowClassName={(record, index) => {
            if (index % 2 === 0) {
              return styles.rowColor;
            }
          }}
        />
      </View>
    );
  }
}
export default Form.create()(DesignListTable);
