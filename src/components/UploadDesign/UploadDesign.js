import React, { PropTypes } from 'react';
import {
  Alert,
  Row,
  Col,
  Timeline,
  Upload,
  Icon,
  Button,
  Form,
  Input,
} from 'antd';
import * as UploadDesignAction from '../../actions/UploadDesignAction';

const FormItem = Form.Item;


class UploadDesign extends React.Component {
  static propTypes = {
    form: PropTypes.any,
    dispatch: PropTypes.func,
  };
  state = {
    imgURL: '',
  };
  uploadFile(e) {
    var client = new OSS.Wrapper({
      region: 'oss-cn-shanghai',
      accessKeyId: 'HavYiQX8qr0s4AKG',
      accessKeySecret: 'iYReaFlQLkpgI2mZcNiynRsAF4TtAm',
      bucket: 'xingdong168',
    });
    client.multipartUpload(e.name, e).then(() => {
      this.setState({
        imgURL: `http://xingdong168.oss-cn-shanghai.aliyuncs.com/${e.name}`,
      });
      return true;
    }).catch(() => {
      alert('上传失败');
      return false;
    });
  }
  uploadDesign() {
    const imgURL = this.state.imgURL ? this.state.imgURL : '';
    const {
      taobaoID,
      phone,
      email,
    } = this.props.form.getFieldsValue();
    this.props.dispatch(UploadDesignAction.uploadDesign({
      imgURL,
      taobaoID,
      phone,
      email,
    }));
  }
  render() {
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div style={{ marginTop: '20px' }}>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={{ span: 12, offset: 6 }}>
            <Alert
              message={
                <div style={{ fontSize: '16px', lineHeight: '20px' }}>
                  <p>欢迎上传您的设计</p><p>更多信息请关注星东公众号</p>
                </div>
              }
              type="info"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={{ span: 12, offset: 6 }}>
            <Timeline>
              <Timeline.Item>请您上传自己的设计稿</Timeline.Item>
              <Timeline.Item>客服人员审核后会尽快联系你</Timeline.Item>
              <Timeline.Item>审核通过我们将与你保持合作</Timeline.Item>
            </Timeline>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={{ span: 12, offset: 6 }}>
            <Upload.Dragger multiple={false} beforeUpload={(e) => this.uploadFile(e)}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">点击或将文件拖拽到此区域上传</p>
              <p className="ant-upload-hint">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>
            </Upload.Dragger>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={{ span: 12, offset: 6 }}>
            <FormItem
              label="淘宝ID"
              { ...formItemLayout }
            >
              <Input {...getFieldProps('taobaoID', { initialValue: '' })} placeholder="请输入淘宝ID" />
            </FormItem>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={{ span: 12, offset: 6 }}>
            <FormItem
              label="联系电话"
              { ...formItemLayout }
            >
              <Input {...getFieldProps('phone', { initialValue: '' })} placeholder="请输入联系电话" />
            </FormItem>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={{ span: 12, offset: 6 }}>
            <FormItem
              label="邮箱"
              { ...formItemLayout }
            >
              <Input {...getFieldProps('email', { initialValue: '' })} placeholder="请输入邮箱" />
            </FormItem>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={{ span: 12, offset: 6 }}>
            <FormItem
              wrapperCol={{ span: 16, offset: 6 }}
            >
              <Button
                type="primary"
                onClick={ () => this.uploadDesign() }
              >
                上传设计
              </Button>
            </FormItem>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create()(UploadDesign);
