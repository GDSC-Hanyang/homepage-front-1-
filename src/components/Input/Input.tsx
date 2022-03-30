import React from 'react';
import { Input as StyledInput } from 'antd';
import './Input.less';

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
