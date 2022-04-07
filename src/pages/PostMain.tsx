import { useState, useEffect } from 'react';
import './Post.less';
import { getPostByNo } from '../data/Data';
import { Pagination } from 'antd';

type pL = {
    no: number,
    title: string,
    content: string,
    createDate: string,    
    writer: string,
}

const PostMain = () =>{
    const [curPage, setCurPage] = useState<number>(1);
    const [arrayData , setArrayData] = useState<pL[]>();

    useEffect(()=>{
        var newArray : pL[] = [];
        var start = 1 + (curPage-1)*7 ;
        for(var i : number = start; i<=start+6 ; i++){
            var p : pL|null = getPostByNo(i);
            p ? newArray.push(p) : newArray.push();
        }
        setArrayData(newArray);
    } , [curPage])

    const returnLink = (item : pL) : string =>{
        let link =  '/post/' + item.no;
        return link;
    }

    const handleClick = (e : number) =>{
        setCurPage(e);
    }
    return ( 
        <div>
            <div className="head">Notice</div>
            <div className = "menu">
                <div>번호</div>
                <div>제목</div>
                <div>작성자</div>
                <div>작성일</div>
            </div>
            {
                arrayData ? arrayData.map((item , index) => {
                    return(
                        <div className='row'>
                            <div>{item.no}</div>
                            <a href={returnLink(item)}>{item.title}</a>
                            <div>{item.writer}</div>
                            <div id="date">{item.createDate}</div>
                        </div>
                    );
                }) : 'empty'
            }
            <Pagination className="page" simple defaultCurrent={1} total={50} onChange={handleClick}/>
        </div>
    );
};

export default PostMain;