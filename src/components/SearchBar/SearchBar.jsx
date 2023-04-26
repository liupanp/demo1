import React from 'react';
import SearchBarStyled from './SearchBarStyled';
import searchIcon from '@/assets/icon/search.svg';

const SearchBar = (props) => {
  const { children,placeholder, ...rest } = props;
  return <SearchBarStyled 
            onSearch={props?.onSearch&&props?.onSearch(e)}
            onBlur={props?.onBlur&&props?.onBlur(e)}
            onCancel={props?.onCancel&&props?.onCancel(e)}
            icon={<img style={{width:'0.48rem',height:'0.48rem'}} src={searchIcon}></img>}
            clearable
            placeholder ={placeholder|| "请输入内容"}
            style={{
            '--border-radius': '0.32rem',
            '--background': '#F3F3F3',
            '--height': '0.6rem',
            '--padding-left': '0.2rem',
          }}
   {...rest}>{children}</SearchBarStyled>;
};

export default SearchBar;
