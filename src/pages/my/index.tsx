import React from "react";
import { useModel } from 'umi';

const My = () => {
  const { user, loading } = useModel('global');
  
  return (
    <div>
      <p>我的</p>
      <div>拿到全局数据{user}</div>
    </div>
  );
};

export default My;
