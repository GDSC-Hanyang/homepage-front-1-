import React from 'react';
import Button from '../../components/Button/Button';
import './index.less';

const ApplyPage = () => {
  const done = true;

  return (
    <div className="apply-page">
      <img src="/images/logo.png" className="logo-img" />
      <div className="apply-title">Goodle Developer Student Clubs</div>
      <div className="apply-content">Hanyang University</div>
      <Button
        size="large"
        type="primary"
        className={done ? 'done-true' : 'done-false'}
      >
        지원하기
      </Button>
    </div>
  );
};

export default ApplyPage;
