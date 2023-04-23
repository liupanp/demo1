import React from 'react';
import {history} from 'umi';
import Button from '@/components/Button/index'

export default function HomePage() {
  return (
    <div>
      <div className='cloth-wrap'>
        
        {/* <div className='cloth-item'>
        </div> */}
      </div>
      首页
      <Button color='primary' onClick={()=>{
        history.push('/docs');
      }}>跳转到文档</Button>
    </div>
  );
}
