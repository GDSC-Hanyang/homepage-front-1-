import * as React from 'react';
import './CardSNS.less';

import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import kakaotalk from './img/kakaotalk.png';

function CardSNS() {
    return(
        <div className='SocialCard'>
         
            <img className='SocialIcon' src={instagram} alt='instagram'/>
         
            <p className='SocialName'>인스타그램</p>
            <p className='SocialAccount'>@gdsc_hanyang</p>
        </div>
    )
}

export default CardSNS;