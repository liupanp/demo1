import React from 'react';
// import SearchBarStyled from './SearchBarStyled';
import filterIcon from '@/assets/icon/filter.svg';
import scanCode from '@/assets/icon/scan-code.svg';
import searchIcon from '@/assets/icon/search.svg';
import { SearchBar } from 'antd-mobile';
import styles from './SearchBarStyled.less';

const SearchBars = (props) => {
  const { children, placeholder, ...rest } = props;
  return (
    <div className={styles.commodityTitle}>
      <img
        src={scanCode}
        className={styles.commodityTitle_scan}
        onClick={() => props?.onScan && props.onScan()}
        alt=""
      />
      <SearchBar
        onSearch={(e) => props?.onSearch && props?.onSearch(e)}
        onBlur={(e) => props?.onBlur && props?.onBlur(e)}
        onCancel={(e) => props?.onCancel && props?.onCancel(e)}
        icon={
          <img
            style={{ width: '0.48rem', height: '0.48rem' }}
            src={searchIcon}
          ></img>
        }
        clearable
        placeholder={placeholder || '请输入内容'}
        style={{
          '--border-radius': '0.32rem',
          '--background': '#F3F3F3',
          '--height': '0.6rem',
          '--padding-left': '0.2rem',
        }}
        {...rest}
      >
        {children}
      </SearchBar>
      <img
        className={styles.commodityTitle_filter}
        onClick={() => props?.onFilter && props?.onFilter()}
        src={filterIcon}
        alt=""
      />
    </div>
  );
};

export default SearchBars;
