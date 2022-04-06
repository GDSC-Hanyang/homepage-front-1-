import * as React from 'react';
import './CardStudents.less';

interface Iprops {
    title: string,
    content: string,
}

function CardStudents(props: Iprops) {
    return(
        <div className='CircleCard'>
            <p className='CircleTitle'>{props.title}</p>
            <p className='CircleContent'>{props.content}</p>
        </div>
    )
}

export default CardStudents;