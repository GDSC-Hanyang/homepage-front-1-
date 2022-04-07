type pL = {
  no: number,
  title: string,
  content: string,
  createDate: string,
  writer: string,
}
const postList = [
    {
      no: 1,
      title: "🔥1(필독) 해커톤 연장 공지",
      content: "첫번째 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 2,
      title: "🔥2(필독) 해커톤 연장 공지",
      content: "2022년도 해커톤이 연장되었습니다. 지원하신 분들은 아래 공지사항을 숙지하세요. 해커톤 일정 연장 2022년 3월 22일부터 26일까지 (2일 연장) 장소는 변경 없습니다 기타 문의) 000-0000-0000",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 3,
      title: "🔥3(필독) 해커톤 연장 공지",
      content: "세번째 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 4,
      title: "🔥4(필독) 해커톤 연장 공지",
      content: "네번째 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 5,
      title: "🔥5(필독) 해커톤 연장 공지",
      content: "다섯번째 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 6,
      title: "🔥6(필독) 해커톤 연장 공지",
      content: "6째 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 7,
      title: "🔥7(필독) 해커톤 연장 공지",
      content: "7 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 8,
      title: "🔥(필독) 해커톤 연장 공지",
      content: "8 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 9,
      title: "🔥(필독) 해커톤 연장 공지",
      content: "9 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
    {
      no: 10,
      title: "🔥(필독) 해커톤 연장 공지",
      content: "10 게시글 내용입니다.",
      createDate: "2020-10-25",
      writer: "김모지"
    },
  ];
  
  const getPostByNo = (no : number) : pL|null => {
    let array = postList.filter(x => x.no === no);
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }
  
  export {
    postList,
    getPostByNo
  };