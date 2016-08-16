import React, { PropTypes } from 'react';
import { Form, Input, Slider, Radio, Button } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class TextDIY extends React.Component {
  static propTypes = {
    submitTextConfig: PropTypes.func,
    form: PropTypes.any,
  };
  handleSubmit() {
    const params = this.props.form.getFieldsValue();
    this.props.submitTextConfig(params);
  }
  render() {
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <Form horizontal onSubmit={() => {this.handleSubmit();}}>
        <FormItem {...formItemLayout} label="文本">
          <Input {...getFieldProps('text', { initialValue: '' })} placeholder="请输入文本" />
        </FormItem>
        <FormItem {...formItemLayout} label="字体大小">
          <Slider min={1} max={10} {...getFieldProps('fontSize')} />
        </FormItem>
        <FormItem {...formItemLayout} label="颜色">
          <RadioGroup {...getFieldProps('color')}>
            <RadioButton value="black">黑</RadioButton>
            <RadioButton value="white">白</RadioButton>
            <RadioButton value="red">红</RadioButton>
            <RadioButton value="blue">蓝</RadioButton>
            <RadioButton value="yellow">黄</RadioButton>
            <RadioButton value="green">绿</RadioButton>
          </RadioGroup>
        </FormItem>
        <FormItem wrapperCol={{ offset: 11 }} >
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(TextDIY);
