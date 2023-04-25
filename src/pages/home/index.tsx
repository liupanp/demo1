import React from 'react';
import {history,useModel} from 'umi';
import { FormattedMessage,SelectLang } from 'umi';
import Card from '@/components/Card/index';
import  styles from './index.less'; 

export default function HomePage() {
    // 菜单项数据
  const menuContent=[
    {
      title:'店铺日报',
      route:'/docs',
      icon:'',
    },
    {
      title:'单款反馈',
      route:'/upload',
      icon:'',
    },
    {
      title:'反馈统计',
      route:'',
      icon:'',
    },
    {
      title:'TOP款',
      route:'',
      icon:'',
    },
    {
      title:'单SKU画像',
      route:'',
      icon:'',
    },
    {
      title:'拣配单',
      route:'',
      icon:'',
    },
    {
      title:'补货单',
      route:'',
      icon:'',
    },
    {
      title:'以图搜图',
      route:'',
      icon:'',
    },
    {
      title:'反馈吧',
      route:'',
      icon:'',
    },
    {
      title:'陈列建议',
      route:'',
      icon:'',
    },
  ];

  const renderContent=()=>{
    return (
      <div className={styles.menuWrap}>
        {menuContent&&menuContent?.map((i)=>(
          <div key={i.title} className={styles.menuWrap_content} onClick={()=>{
            history.push(i.route);
          }}>
            {i.title}
          </div>
        ))}
      </div>
    );
  };
  
  const bodyStyle={
    padding:0,
  };

  return (
    <div>
      <SelectLang />
      <FormattedMessage id="welcome" />
      <Card title={'商品管理'} content={renderContent()} bodyStyle={bodyStyle} />
    </div>
  );
}
