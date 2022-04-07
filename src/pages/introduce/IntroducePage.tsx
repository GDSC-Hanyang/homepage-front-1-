import React, { useState } from 'react';
import Detailed from 'components/introduce/Detailed';
import Generation from 'components/introduce/Generation';
import '../../css/introduce/introducePage.css';

//introducePage 전체 부분(container)
//detailHidden : 멤버 클릭 시 세부내용 display On/Off state
function IntroducePage() {
  const [detailHidden, setdetailHidden] = useState<Boolean>(false);
  return (
    <main className="introContainer">
      <Generation number={1} setdetailHidden={setdetailHidden} />
      <div className="divider" />
      <Generation number={2} setdetailHidden={setdetailHidden} />
      <Detailed detailHidden={detailHidden} setdetailHidden={setdetailHidden} />
    </main>
  );
}

export default IntroducePage;
