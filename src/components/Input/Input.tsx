import React from 'react';
import { Input as StyledInput } from 'antd';
import './Input.less';

const Input = ({ className = 'styled-input', ...props }) => {
  return <StyledInput className={`styled-input ${className}`} {...props} />;
};

export default Input;
