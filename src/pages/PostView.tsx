import React, { useEffect, useState } from 'react';
import { getPostByNo } from '../data/Data';
import './Post.less';
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {Button } from 'antd';

type pL = {
    no: number,
    title: string,
    content: string,
    createDate: string,
    writer: string,
}
type par = {
    no : string;
}
const PostView = () => {

  const [ data, setData ] = useState<pL|null>();
  const {no}  = useParams<par>();
  const navigate = useNavigate();

  const onClickMovePage = () : void =>{
    let link =  '/';
    navigate(link); //뒤로가기 버튼 누르면 다시 목록으로 
  }
  useEffect(() => {
    setData(getPostByNo(Number(no)));
  }, []);

  return (
    <>
      <div>
        <div className="head">Notice</div>
        <div className="title">
            {data ? (
                <>
                <span>{data.title}</span>
                <span id="write_date">
                    <span>작성자 | {data.writer}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>작성일시 | {data.createDate}</span>
                </span>
                </>
                ) : '게시글을 찾을 수 없습니다.'
            }

        </div>
        {data ? <div className="text">{data.content}</div> : '게시물을 찾을 수 없습니다.'}
        <Button className="go_back_btn" onClick={() => {onClickMovePage()}}>돌아가기</Button>
      </div>
    </>
  )
}

export default PostView;