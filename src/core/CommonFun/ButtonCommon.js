/**
 * Created by wangxiaodan on 16/7/12.
 */
import React from 'react';
import { Button } from 'antd';
import mainStyles from '../../assets/stylesheets/main.scss';

export const revertButton = (actionName) => (params) => {
  return (
    <Button
      className={ mainStyles.whiteButton }
      type="ghost"
      style={{ marginLeft: '10px' }}
      onClick={() => actionName(params)}
    >
      返回
    </Button>
  );
};

export const cancelButton = (actionName) => (action, id, params) => {
  return (
    <Button
      className={ mainStyles.whiteButton }
      type="ghost"
      style={{ marginLeft: '10px' }}
      onClick={() => { actionName(action, id, params); }}
    >
      取消
    </Button>
  );
};

export const confirmButton = (actionName) => (params) => {
  return (
    <Button
      className={ mainStyles.blueButton }
      type="primary"
      onClick={() => { actionName(params); }}
    >
      确认
    </Button>
  );
};

export const modifyButton = (actionName) => (params) => {
  return (
    <Button
      className={ mainStyles.blueButton }
      type="primary"
      onClick={() => actionName(params)}
    >
      修改
    </Button>
  );
};

export const SubmitButton = (actionName) => (params) => {
  return (
    <Button
      className={ mainStyles.blueButton }
      type="primary"
      onClick={() => { actionName(params); }}
    >
      提交
    </Button>
  );
};


