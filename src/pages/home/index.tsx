import React from 'react';
import {history,useModel} from 'umi';
import { FormattedMessage,SelectLang } from 'umi';
import Card from '@/components/Card/index';

export default function HomePage() {
    // 菜单项数据
  const menuContent=[
    {
      title:'店铺日报',
      route:'',
      icon:'',
    },
     {
      title:'单款反馈',
      route:'',
      icon:'',
    },
  ];

  const renderContent=()=>{
    return (
      <div>
        {menuContent&&menuContent?.map((i)=>(
          <div>
            {i.title}
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div>
      <SelectLang />
      <FormattedMessage id="welcome" />
      <Card title={'商品管理'} content={renderContent()} />
    </div>
  );
}
