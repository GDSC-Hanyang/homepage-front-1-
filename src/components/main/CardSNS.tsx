import * as React from 'react';
import './CardSNS.less';

import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import kakaotalk from './img/kakaotalk.png';

interface Iprops {
    img: string,
    name: string,
    account: string,
    border: string,
    shadow: string,
}

function CardSNS(props: Iprops) {
    var image : string = '';
    return(
        <div className='SocialCard' style={{border:props.border, boxShadow:'12px 12px 12px '+props.shadow}}>
            <img className='SocialIcon' src={
                props.img === "instagram"?
                instagram
                : props.img === "facebook"?
                facebook
                : props.img === "kakaotalk"?
                kakaotalk
                :facebook
                } alt={props.name}/>
            <p className='SocialName'>{props.name}</p>
            <p className='SocialAccount'>{props.account}</p>
        </div>
    )
}

export default CardSNS;