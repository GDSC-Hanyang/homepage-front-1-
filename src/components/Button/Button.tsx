import React from 'react';
import { Button as StyledButton } from 'antd';
import './Button.less';

const Button: React.FC<any> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
