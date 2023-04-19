import yayJpg from '../assets/yay.jpg';
import { Button } from 'antd-mobile';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} />
      </p>
      <Button color='primary'>按钮</Button>
    </div>
  );
}
