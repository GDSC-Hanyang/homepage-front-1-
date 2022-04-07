export interface info {
  color: string;
  name: string;
  description: string;
}

export function memberInfo(): info[] {
  return [
    {
      color: 'blue',
      name: '코어멤버',
      description: '코어멤버는 이런이런 설명',
    },
    {
      color: 'red',
      name: '개발팀',
      description: '개발팀은 이런이런 설명',
    },
    {
      color: 'yellow',
      name: '기획팀',
      description: '기획팀은 이런이런 설명',
    },
    {
      color: 'green',
      name: '디자인팀',
      description: '디자인팀은 이런이런 설명',
    },
  ];
}
