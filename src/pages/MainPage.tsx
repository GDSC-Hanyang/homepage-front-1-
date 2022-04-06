import * as React from 'react';
import {Component} from 'react';

import { ActivityList, CircleList, SocialList, GdscInfo } from './data';
import CardActivities from 'components/main/CardActivities';
import CardStudents from 'components/main/CardStudents';
import CardSNS from 'components/main/CardSNS';

import './less/MainPage.less';

import logo from 'components/main/img/logo.png';
import GDSC from 'components/main/img/GDSC.png';

export default function MainPage() {
    
    return(
        <div className='MainContainer'>
            <div className='MainBanner'>
                <div>
                    <div className='MainBannerBlur'></div>
                    <img className='Logo' src={logo} alt="로고"/>
                    <p className='MainTitle'>Google Developer Student Clubs</p>
                    <p className='MainSubTitle'>Hanyang University</p>
                </div>
            </div>
            
            <div>
                <img className='TextLogo' src={GDSC} alt="로고"/>
                <p className='GdscInfo'>{GdscInfo}</p>
                <p className='Divider'></p>
            </div>

            <div>
                <p className='MiddleTitle'>Activities of GDSC</p>
            </div>
            <ul className='Activity'>
                
                <div>
                    {ActivityList.map((item) => 
                    <li><CardActivities icon={item.icon} title={item.title} content={item.content}/></li>)}
                </div>
                
            </ul>
            <ul className='Circle'>
                <div>
                    {CircleList.map((item) => 
                    <li><CardStudents title={item.title} content={item.content}/></li>)}
                </div>
            </ul>
            
            <ul className='Social'>
                <div>
                    {SocialList.map((item) => 
                    <li><CardSNS img={item.img} name={item.name} account={item.account}/></li>)}
                </div>
            </ul>
        </div>
        
    )
    
}