import {history,useModel} from 'umi';
import Button from '@/components/Button/index';
import React from 'react';
const HomePage = () => {
  return (
    <div>
      <div className='cloth-wrap'>
      </div>
      首页
      <div style={{marginTop:'30px'}} onClick={()=>{
        history.push('/login')
      }}>
        登陆
      </div>
    </div>
  );
};

export default HomePage;
