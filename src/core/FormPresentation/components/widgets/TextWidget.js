/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React, { PropTypes } from 'react';

import BaseInput from './BasicInput';


function TextWidget(props) {
  return <BaseInput {...props} />;
}

TextWidget.propTypes = {
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default TextWidget;
