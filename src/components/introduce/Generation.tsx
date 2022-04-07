import React from 'react';
import { info, memberInfo } from 'constants/introduce/memberInfo';
import { Space } from 'antd';
import Member from 'components/introduce/Member';
import '../../css/introduce/generation.css';

//number : 몇번째 기수인지, setdetailHidden : setstate
interface GenerationType {
  number: Number;
  setdetailHidden: React.Dispatch<React.SetStateAction<Boolean>>;
}

// N기 멤버소개 파트
function Generation({ number, setdetailHidden }: GenerationType) {
  const infoArr: info[] = memberInfo(); //멤버 정보 배열 반환
  return (
    <article className="generation">
      <h2 className="title">{`${number}기 멤버 소개`}</h2>
      <Space size={80}>
        {infoArr.map(({ color, name, description }) => (
          <Member
            key={name}
            color={color}
            name={name}
            description={description}
            setdetailHidden={setdetailHidden}
          />
        ))}
      </Space>
    </article>
  );
}

export default Generation;
