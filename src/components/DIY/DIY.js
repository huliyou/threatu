import React, { PropTypes } from 'react';
import { Row, Col, Tabs, Button, Form, Input } from 'antd';
import * as DIYAction from '../../actions/DIYAction';
const FormItem = Form.Item;
import TextDIY from './TextDIY';
import { Layer, Stage, Text } from 'react-konva';
import Img from '../Img';
import { random_string } from '../../core/Util';

class DIY extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object,
    form: PropTypes.ayn,
  };
  componentWillMount() {
    this.setState({
      textConfig: {
        text: '',
        color: '',
        fontSize: null,
      },
    });
  }
  componentDidMount() {
    const watermark = this.refs.watermark;
    watermark.setZIndex(10);
  }
  submitTextConfig(config) {
    this.setState({
      textConfig: config,
    });
  }
  uploadDIY() {
    const result = this.refs.canvas.getStage().toDataURL();
    var blobBin = atob(result.split(',')[1]);
    var array = [];
    for(var i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    const blob =new Blob([new Uint8Array(array)], {type: 'image/png'});
    const now = new Date();
    blob.lastModifiedDate = now;
    blob.name = `${random_string(6)}.png`;
    const file = new File([blob], blob.name);
    const client = new OSS.Wrapper({
      region: 'oss-cn-shanghai',
      accessKeyId: 'HavYiQX8qr0s4AKG',
      accessKeySecret: 'iYReaFlQLkpgI2mZcNiynRsAF4TtAm',
      bucket: 'xingdong168',
    });
    const taobaoID = this.props.form.getFieldsValue().taobaoID;
    client.multipartUpload(file.name, file).then(() => {
      this.props.dispatch(DIYAction.uploadDIY({
        taobaoID,
        imgURL: `http://xingdong168.oss-cn-shanghai.aliyuncs.com/${file.name}`
      }));
      return true;
    }).catch(() => {
      alert('上传失败');
      return false;
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <div style={{ marginTop: '20px' }}>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} >
            <Stage width={200} height={300} ref="canvas">
              <Layer>
                <Img  src={this.props.location.query.imgURL} x={0} y={0} width={200} height={300} />
                {/* {JSON.stringify(getBase64FromImageUrl(this.props.location.query.imgURL))} */}
              </Layer>
              <Layer ref="watermark">
                <Text
                  draggable
                  x={50}
                  y={100}
                  fontSize={this.state.textConfig.fontSize * 3}
                  fontFamily="Calibri"
                  fill={this.state.textConfig.color}
                  allign="center"
                  text={this.state.textConfig.text}
                />
              </Layer>
            </Stage>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="文字" key="1">
                <TextDIY submitTextConfig={(config) => this.submitTextConfig(config)} />
              </Tabs.TabPane>
              {/* <Tabs.TabPane tab="图库" key="2">选项卡二内容</Tabs.TabPane> */}
              {/* <Tabs.TabPane tab="自定义图片" key="3">选项卡三内容</Tabs.TabPane> */}
            </Tabs>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }}>
          <Col xs={{ span: 20, offset: 2 }}>
            <Form horizontal >
              <FormItem {...formItemLayout} label="淘宝ID">
                <Input {...getFieldProps('taobaoID', { initialValue: '' })} placeholder="请输入淘宝ID" />
              </FormItem>
              <FormItem wrapperCol={{ span: 11, offset: 2 }} >
                <Button type="primary" onClick={() => this.uploadDIY()}>上传DIY</Button>
                <Button style={{ marginLeft: '30px' }}>返回产品列表</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create()(DIY);
