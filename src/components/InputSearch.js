import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const onSearch = () => {
    console.log('onSearch__________', )
};

const onChange = (e) => {
  console.log('onChange_____', e.target.value)
};

const InputSearch = () => {

  return (
    <>
      <Search 
        placeholder="请输入http状态码"
        enterButton="搜索"
        size="large"
        onChange={ onChange }
        onSearch={ onSearch }
      >
      </Search>
    </>
  )
};

export default InputSearch;