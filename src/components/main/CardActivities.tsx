import * as React from 'react';
import './CardActivities.less';

function CardActivities() {
    return(
        <div className='Card'>
            <div className='CardIconBack'>
                <p className='CardIcon'>🎤</p>
                <p className='CardTitle'>기술 세미나</p>
                <p className='CardContent'>특정 주제에 대해 관심이 많은 사람 혹은 전문가를 초청해 설명을 듣는 시간입니다.
평소에 접하기 어려운 최신 기술 트렌드나 복잡한 시스템의 설계 방식을 알아볼 수 있습니다.</p>
            </div>
        </div>
    )
}

export default CardActivities;