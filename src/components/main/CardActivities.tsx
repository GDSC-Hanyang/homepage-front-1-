import * as React from 'react';
import './CardActivities.less';

interface Iprops {
    icon: string,
    title: string,
    content: string,
}
let CardActivities = (props: Iprops) => {
    return(
        <div className='Card'>
            <div className='CardIconBack'>
                <p className='CardIcon'>{ props.icon }</p>
            </div>
            <p className='CardTitle'>{ props.title }</p>
            <p className='CardContent'>{ props.content }</p>
        </div>
    )
}

export default CardActivities;