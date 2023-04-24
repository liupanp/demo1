import React from 'react';
import Load from '@ASSETS/loading.gif';

import LoadingStyled from './LoadingStyled';

const Loading = (props) => {
  const { loading } = props;
  return (
    <LoadingStyled show={loading}>
      <div className="loading" />
      {/* 配置全局loading文件 */}
    </LoadingStyled>
  );
};
export default Loading;
