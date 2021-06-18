import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const inputStyle = {
  width: '60%',
  // textAlign: 'center',
  marginLeft: '10%',
};

const useInput = ({ changeHttpCode, searchHttpCode, changeHttpReturn }) => {

const onSearch = (code) => {
    console.log(code)
    searchHttpCode(code)
};

const onChange = (event) => {
  const code = event.target.value
  changeHttpCode(code)
  onSearch(code)
};

return {onSearch, onChange}
}

const InputSearch = ({ changeHttpCode, searchHttpCode }) => {
  const {onSearch, onChange} = useInput({ changeHttpCode, searchHttpCode })
  return (
    <>
      <Search 
        placeholder="请输入http状态码"
        enterButton="搜索"
        size="large"
        onChange={ onChange }
        onSearch={ onSearch }
        style={inputStyle}
      >
      </Search>
    </>
  )
};

export default InputSearch;