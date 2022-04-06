import * as React from 'react';
import {Component} from 'react';

import { ActivityList, CircleList, SocialList } from './data';
import CardActivities from 'components/main/CardActivities';
import CardStudents from 'components/main/CardStudents';
import CardSNS from 'components/main/CardSNS';

import './less/MainPage.less';

import background from 'components/main/img/background.png';
import logo from 'components/main/img/logo.png';

export default function MainPage() {
    
    return(
        <div>
            <div className='MainBanner'>
                <div>
                    <div className='MainBannerBlur'></div>
                    <img className='Logo' src={logo} alt="로고"/>
                    <p className='MainTitle'>Google Developer Student Clubs</p>
                    <p className='MainSubTitle'>Hanyang University</p>
                </div>
            </div>
            
            <div>
                {ActivityList.map((item) => <CardActivities icon={item.icon} title={item.title} content={item.content}/>)}
            </div>
            <div>
                {CircleList.map((item) => <CardStudents title={item.title} content={item.content}/>)}
            </div>
            <div>
                {SocialList.map((item) => <CardSNS img={item.img} name={item.name} account={item.account}/>)}
            </div>
        </div>
        
    )
    
}