import React from 'react';
import './index.less';
import FaqHeader from '../../components/Faq/FaqHeader';
import FaqContent from '../../components/Faq/FaqContent';

const FaqPage = () => {
  return (
    <div className="faq-page">
      <FaqHeader />
      {[1, 2, 3].map((item, idx) => (
        <FaqContent key={`faq-content-${idx}`} />
      ))}
    </div>
  );
};

export default FaqPage;
