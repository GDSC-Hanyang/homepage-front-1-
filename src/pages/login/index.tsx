import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './index.less';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-title">login</div>
      <Input placeholder="email" type="email" />
      <Input placeholder="password" type="password" />
      <div className="button-wrap">
        <Button size="large">회원가입하기</Button>
        <Button size="large" type="primary">
          로그인하기
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
