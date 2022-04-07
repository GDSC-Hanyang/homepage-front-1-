import React, { LegacyRef, RefObject, useRef } from 'react';
import '../../css/introduce/detail.css';
import DetailInfo from './DetailInfo';

interface DetailedType {
  detailHidden: Boolean; //click 시 display On/Off state
  setdetailHidden: React.Dispatch<React.SetStateAction<Boolean>>; //setstate
}

//Member 클릭 시 세부내용
function Detailed({ detailHidden, setdetailHidden }: DetailedType) {
  return (
    <section
      className={
        detailHidden ? 'detailBackground' : 'detailBackground detailHidden'
      }
    >
      <button
        className="quitInfo"
        onClick={() => {
          setdetailHidden(false);
        }}
      >
        X
      </button>
      <DetailInfo />
      <DetailInfo />
      <DetailInfo />
    </section>
  );
}

export default Detailed;
