import * as React from 'react';
import './CardStudents.less';

function CardStudents() {
    return(
        <div className='CircleCard'>
            <p className='CircleTitle'>관련 직무로 진출할 학생</p>
            <p className='CircleContent'>개발자 및 디자이너로 취업 준비를 하거나,
창업을 위해 팀원을 구하고 있는 학생</p>
        </div>
    )
}

export default CardStudents;