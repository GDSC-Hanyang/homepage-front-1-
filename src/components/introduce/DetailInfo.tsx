import React from 'react';
import '../../css/introduce/detailInfo.css';

//Detail 안에 사람 별 info
function DetailInfo() {
  return (
    <article className="detailInfo">
      <div className="detailImage" />
      <div className="detailDescription">
        <h4 className="detailName">곽두철</h4>
        <div className="detailSub">
          <p className="subs">Leader</p>
          <p className="subs">abcdsede@gmail.com</p>
          <p className="subs">리더입니다.</p>
          <p className="subs">자전거 타는 걸 좋아합니다.</p>
        </div>
      </div>
    </article>
  );
}

export default DetailInfo;
