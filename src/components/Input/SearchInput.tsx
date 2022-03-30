import React from 'react';
import { Input as StyledInput } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.less';

const Input = ({ ...props }) => {
  return (
    <StyledInput
      {...props}
      prefix={<SearchOutlined />}
      style={{ color: '#D4D4D4', fontSize: 30 }}
    />
  );
};

export default Input;
