import { info } from 'constants/introduce/memberInfo';
import React from 'react';
import '../../css/introduce/member.css';

interface MemberType {
  color: String; //테두리색
  name: String; //파트이름
  description: String; // 파트에대한 설명
  setdetailHidden: React.Dispatch<React.SetStateAction<Boolean>>; //setstate
}

//각 파트별 component, 클릭 시 세부내용이 보임
function Member({ color, name, description, setdetailHidden }: MemberType) {
  const memberClass: string = 'memberContainer ' + color;
  const memberImgClass: string = 'memberImg ' + color;
  return (
    <div
      className={memberClass}
      onClick={() => {
        setdetailHidden(true);
      }}
    >
      <h3 className="memberTitle">{name}</h3>
      <div className={memberImgClass}></div>
      <p>{description}</p>
    </div>
  );
}

export default Member;
