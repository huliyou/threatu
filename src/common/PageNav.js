/**
 * Created by wangxiaodan on 16/5/9.
 */
import React, { PropTypes } from 'react';
import { Pagination } from 'antd';
import { View } from 'isomorphic';
import Immutable from 'immutable';

const PageNav = (props) => {
  return (
    <View>
      <Pagination
        onChange={(current) => props.searchAction(props.params, current)}
        total={props.pageData.get('total')}
        pageSize={props.pageData.get('pageSize')}
        defaultCurrent={1}
        showQuickJumper
        current={props.current}
      />
    </View>
  );
};

PageNav.propTypes = {
  pageData: PropTypes.instanceOf(Immutable.Map).isRequired, // total pageSize
  searchAction: PropTypes.func.isRequired,
  params: PropTypes.object,
  current: PropTypes.number,
};
export default PageNav;

