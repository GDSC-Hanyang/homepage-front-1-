import * as React from 'react';
import {Component} from 'react';

import { ActivityList, CircleList, SocialList, GdscInfo, Benefit, Benefit2, FooterInfo } from './data';
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
                <div className='GdscInfo'>
                    {GdscInfo.map((item) => <p>{item.text}</p>)}
                </div>
            </div>

            <div className='BgBlur1'></div>
            <div className='BgBlur2'></div>
            <p className='Divider'></p>
            <div style={{textAlign:'center'}}>
                <p className='MiddleTitle1'>Activities of GDSC</p>
                <ul className='Activity'>
                
                    <div>
                        {ActivityList.map((item) => 
                        <li><CardActivities icon={item.icon} title={item.title} content={item.content}/></li>)}
                    </div>
                    
                </ul>
            </div>
            
            <p className='Divider'></p>
            <div>
                <p className='MiddleTitle'>GDSC의 혜택</p>
                <div className='BenefitBg'>
                    <ul className='BenefitUl'>
                        {Benefit.map((item) => <li className='BenefitLi'>{item.text}</li>)}
                    </ul>
                    <ul className='BenefitUl'>
                        {Benefit2.map((item) => <li className='BenefitLi'>{item.text}</li>)}
                    </ul>
                </div>
            </div>

            <p className='Divider'></p>
            <div>
                <p className='MiddleTitle'>이런 학생들의 참여를 기다리고 있습니다</p>
                <ul className='Circle'>
                    <div>
                        {CircleList.map((item) => 
                        <li><CardStudents title={item.title} content={item.content}/></li>)}
                    </div>
                </ul>
                <a className='ApplyBtn' href='/apply'>
                    지원하기
                </a>
            </div>
            
            <p className='Divider'></p>
            <div>
                <p className='MiddleTitle'>GDSC 한양의 스토리를 더 만나보세요!</p>
                <div className='SocialBg'>
                    <ul className='Social'>
                        <div>
                            {SocialList.map((item) => 
                            <li><CardSNS img={item.img} name={item.name} account={item.account}/></li>)}
                        </div>
                    </ul>
                </div>
            </div>

            <div className='Footer'>
                <div>
                    {FooterInfo.map((item) => <p className='FooterText'>{item.text}</p>)}
                </div>
            </div>
        </div>
        
    )
    
}