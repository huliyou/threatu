import React, { PropTypes } from 'react';
import * as Immutable from 'immutable';
import { routeActions } from 'react-router-redux';
import * as ProductListAction from '../../actions/ProductListAction';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import { Radio, Row, Col } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const renderProducts = (products, dispatch) => {
  const views = [];
  products.forEach((product, key) => {
    views.push(
      <Col key={key} xs={{ span: 7, offset: 1 }}>
        <img
          onClick={() => dispatch(routeActions.push(RoutingURL.DIY(product.get('imgURL'))))}
          src={product.get('imgURL')}
          style={{ height: '200px', boxShadow: '10px 10px 10px grey' }}
        />
      </Col>
    );
  });
  return views;
};

class ProductGrid extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    products: PropTypes.instanceOf(Immutable.List),
  };
  state = {
    productType: '',
    productStyle: '',
    productColor: '',
  };
  componentWillMount() {
    this.props.dispatch(ProductListAction.getProductList());
  }
  changeType(e) {
    this.setState({
      productType: e.target.value,
    });
    const params = {
      productType: e.target.value,
      productStyle: this.state.productStyle,
      productColor: this.state.productColor,
    };
    this.props.dispatch(ProductListAction.getProductList(params));
  }
  changeStyle(e) {
    this.setState({
      productStyle: e.target.value,
    });
    const params = {
      productType: this.state.productType,
      productStyle: e.target.value,
      productColor: this.state.productColor,
    };
    this.props.dispatch(ProductListAction.getProductList(params));
  }
  changeColor(e) {
    this.setState({
      productColor: e.target.value,
    });
    const params = {
      productType: this.state.productType,
      productStyle: this.state.productStyle,
      productColor: e.target.value,
    };
    this.props.dispatch(ProductListAction.getProductList(params));
  }
  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <Row type="flex" align="middle">
          <Col xs={{ span: 1, offset: 1 }}>分类：</Col>
          <Col xs={{ span: 12 }}>
            <RadioGroup onChange={(e) => this.changeType(e)}>
              <RadioButton value="图案">图案</RadioButton>
              <RadioButton value="版型">版型</RadioButton>
            </RadioGroup>
          </Col>
        </Row>
        <Row type="flex" align="middle" style={{ marginTop: '10px' }} >
          <Col xs={{ span: 1, offset: 1 }}>风格：</Col>
          <Col xs={{ span: 12 }}>
            <RadioGroup onChange={(e) => this.changeStyle(e)}>
              <RadioButton value="NBA">NBA</RadioButton>
              <RadioButton value="学院">学院</RadioButton>
              <RadioButton value="插画">插画</RadioButton>
              <RadioButton value="几何">几何</RadioButton>
              <RadioButton value="可爱">可爱</RadioButton>
              <RadioButton value="黑白">黑白</RadioButton>
            </RadioGroup>
          </Col>
        </Row>
        <Row type="flex" align="middle" style={{ marginTop: '10px' }} >
          <Col xs={{ span: 1, offset: 1 }}>颜色：</Col>
          <Col xs={{ span: 12 }}>
            <RadioGroup onChange={(e) => this.changeColor(e)}>
              <RadioButton value="黑">黑</RadioButton>
              <RadioButton value="白">白</RadioButton>
              <RadioButton value="红">红</RadioButton>
              <RadioButton value="蓝">蓝</RadioButton>
              <RadioButton value="黄">黄</RadioButton>
              <RadioButton value="绿">绿</RadioButton>
              </RadioGroup>
          </Col>
        </Row>
        <Row
          style={{
            borderBottom: '1px solid #e9e9e9',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        />
        {renderProducts(this.props.products, this.props.dispatch)}
      </div>
    );
  }
}

export default ProductGrid;
