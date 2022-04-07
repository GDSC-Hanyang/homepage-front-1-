import React, { useState, useEffect } from 'react';
import './Post.less';
import {postList} from '../data/Data';
import { Table, Input, Button, Space } from 'antd';

type pL = {
    no: number,
    title: string,
    content: string,
    createDate: string,
    writer: string,
}
const returnLink = (item : pL) : string =>{
    let link =  '/post/' + item.no;
    return link;
}
const PostList = () => {
  const [ dataList, setDataList ] = useState<pL[]>([]);
  const [searchText , setSearchText] = useState<string>('');
  const [searchedColumn , setSearchedColumn] = useState<string>('');

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
    <div>

    </div>
  );
};

export default PostList;