/**
 * Created by wl on 16/4/15.
 */

import React, { PropTypes } from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import { Base64 } from 'js-base64';
import styles from '../../assets/stylesheets/Content/ContentList.scss';
const FormItem = Form.Item;

class PatientListTable extends React.Component {
  static propTypes = {
    products: PropTypes.instanceOf(Immutable.List),
  };
  constructor(props, context) {
    super(props, context);
    this.columns = [{
      title: '产品ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '分类',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '风格',
      dataIndex: 'style',
      key: 'style',
    }, {
      title: '颜色',
      dataIndex: 'color',
      key: 'color',
    }, {
      title: '图片',
      dataIndex: 'picture',
      key: 'picture',
    }];
  }
  _renderDataSource(datas) {
    const dataSource = [];
    datas.forEach((value, key) => {
      dataSource.push({
        key,
        id: key,
        type: value.get('productType'),
        style: value.get('productStyle'),
        color: value.get('productColor'),
        picture: <img style={{ height: 100 }} src={value.get('imgURL')} />,
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
          dataSource={this._renderDataSource(this.props.products)}
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
export default Form.create()(PatientListTable);
