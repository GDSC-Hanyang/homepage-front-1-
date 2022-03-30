import React from 'react';
import Button from '../../components/Button/Button';
import './auth.less';

const SignupAuthPage = () => {
  const done = true;

  return (
    <div className="auth-page">
      {!done ? (
        <>
          <div className="auth-title">회원가입</div>
          <div className="auth-content">이메일 인증을 완료해주세요!</div>
          <Button size="large" type="primary" className="auth-button">
            이메일 인증완료!
          </Button>
        </>
      ) : (
        <>
          <div className="auth-title done">이메일 인증 완료!</div>
          <Button size="large" type="primary" className="login-button">
            로그인하기
          </Button>
        </>
      )}
    </div>
  );
};

export default SignupAuthPage;
