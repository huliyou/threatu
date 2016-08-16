/**
 * Created by wl on 16/7/8.
 */
import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;
// 筛选组件遍历下拉表单 ergodic
export const getSelectList = (data) => {
  const dataSource = [];
  data.forEach((value, index) => {
    dataSource.push(
      <Option key={index} value={String(value.get('id'))}>{value.get('name')}</Option>
    );
  });
  return dataSource;
};

export const getSelectListTow = (data) => {
  const dataSource = [];
  data.forEach((value, index) => {
    dataSource.push(
      <Option key={index} value={String(value.get('id'))}>
        {value.get('name')}({value.get('id')})
      </Option>
    );
  });
  return dataSource;
};

export const getSelectListThree = (data) => {
  const dataSource = [];
  if (data) {
    data.forEach((value, index) => {
      dataSource.push(
        <Option key={index} value={value.get('id')}>
          {value.get('name')}({value.get('username')})
        </Option>
      );
    });
  }
  return dataSource;
}

export const getTemplateSelectList = (data) => {
  const dataSource = [];
  if (data) {
    data.forEach((value, index) => {
      dataSource.push(
        <Option
          key={index}
          value={ value.get('id') + ',' + value.get('type') +
             ',' + value.get('departmentId') + ',' + value.get('departmentName')}
        >
          {value.get('name')}({value.get('id')})
        </Option>
      );
    });
  }
  return dataSource;
}
