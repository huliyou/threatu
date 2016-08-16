/**
 * Happy Hacking
 * Created by leiyouwho on 17/5/2016.
 */

import React, { PropTypes } from 'react';

import BaseInput from './BasicInput';

import { DatePicker } from 'antd';



function fromJSONDate(jsonDate) {
  return jsonDate ? new Date(jsonDate).toJSON().slice(0, 19) : "";
}

function toJSONDate(dateString) {
  if (dateString) {
    return new Date(dateString).toJSON();
  }
}

function DateTimeWidget(props) {
  const { value, onChange } = props;
  // return (
  //   <BaseInput
  //     type="datetime-local"
  //     {...props}
  //     value={fromJSONDate(value)}
  //     onChange={(value) => onChange(toJSONDate(value))}
  //   />
  // );
  return (
    <div>
      <DatePicker
        // {...props}
        value={value}
        onChange={(value, dateString) => onChange(dateString)}
      />
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  DateTimeWidget.propTypes = {
    value: PropTypes.string,
  };
}

export default DateTimeWidget;

