import { useState } from 'react';
import * as React from 'react';
import CardActivities from 'components/main/CardActivities';

export type ActivityType = {
    icon: string
    title: string
    content: string
}

function ActivityList() {
    const [ActivityList, setActivityList] = useState<ActivityType[]>([
        {
            icon: "🎤",
            title: "기술 세미나",
            content: "특정 주제에 대해 관심이 많은 사람 혹은 전문가를 초청해 설명을 듣는 시간입니다.<br>평소에 접하기 어려운 최신 기술 트렌드나 복잡한 시스템의 설계 방식을 알아볼 수 있습니다."
        },
        {
            icon: "📚",
            title: "기술 스터디",
            content: "어떤 기술에 대해 배우고 싶은 사람, 가르쳐주고 싶은 사람들이 모여 같이 공부하고 의견을 나눕니다. 관심 있는 분야가 있다면 누구나 스터디를 개설할 수 있습니다."
        },
        {
            icon: "👥",
            title: "토이 프로젝트",
            content: "자기가 가진 기술을 바탕으로 여러 사람들과 협력하여 실제 프로그램을 개발합니다. 평소에 아이디어만 갖고 있었거나 혼자 하기 어려웠던 프로젝트를 실제로 구현할 수 있습니다."
        }
    ])

    return (
        <div>
            {ActivityList.map((item) => <CardActivities icon={item.icon} title={item.title} content={item.content}/>)}
        </div>
    );
}

export default ActivityList;