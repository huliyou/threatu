/**
 * Created by wl on 16/4/15.
 */

import React, { PropTypes } from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import styles from '../../assets/stylesheets/Content/ContentList.scss';

class DIYsListTable extends React.Component {
  static propTypes = {
    DIYs: PropTypes.instanceOf(Immutable.List),
  };
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '淘宝ID',
      dataIndex: 'taobaoID',
      key: 'taobaoID',
    }, {
      title: '分类',
      dataIndex: 'productType',
      key: 'productType',
    }, {
      title: '风格',
      dataIndex: 'productStyle',
      key: 'productStyle',
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
        productType: value.get('productType'),
        productStyle: value.get('productStyle'),
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
          dataSource={this._renderDataSource(this.props.DIYs)}
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
export default Form.create()(DIYsListTable);
