import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './index.less';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-title">회원가입</div>
      <Input placeholder="email" type="email" />
      <Input placeholder="passaword" type="password" />
      <div className="button-wrap">
        <Button size="large" type="primary">
          회원가입하기
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
