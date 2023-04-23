import yayJpg from '../assets/yay.jpg';
import { Button } from 'antd-mobile';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <div className='cloth-wrap'>
        <div className='cloth-item'>
        </div>
        <div className='cloth-item'>
        </div>
      </div>
      <Button color='primary'>按钮</Button>
    </div>
  );
}
