import React from 'react';
import { Input, Button } from 'antd';
import './WriteNotice.less';

const { TextArea } = Input;

const WriteNotice = () => {
  return (
    <div>
      <div id="head">Notice 작성</div>
      <div className="input">
        <TextArea
          id="title"
          placeholder="제목을 입력하세요."
          rows={1}
          cols={30}
        />
        <TextArea
          id="text"
          placeholder="내용을 입력하세요."
          rows={15}
          cols={30}
        />
        <div className="buttons">
          <Button id="quit">취소</Button>
          <Button id="register">
            등록
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WriteNotice;
