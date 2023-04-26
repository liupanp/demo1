import React from 'react';
import {history,useModel} from 'umi';
import { FormattedMessage,SelectLang } from 'umi';
import Card from '@/components/Card/index';
import  styles from './index.less'; 
import storeDaily from '@/assets/icon/store-daily.svg';
import individualFeedback from '@/assets/icon/individual-feedback.svg';
import feedbackStatistics from '@/assets/icon/feedback-statistics.svg';
import top from '@/assets/icon/top.svg';
import sku from '@/assets/icon/sku.svg';
import pickingList from '@/assets/icon/picking-list.svg';
import replenishmentNote from '@/assets/icon/replenishment-note.svg';
import searchImages from '@/assets/icon/search-images.svg';
import feedback from '@/assets/icon/feedback.svg';
import displaySuggestions from '@/assets/icon/display-suggestions.svg';

export default function HomePage() {
    // 菜单项数据
  const menuContent=[
    {
      title:'商品列表',
      route:'/docs',
      icon:storeDaily,
    },
    {
      title:'图片上传',
      route:'/upload',
      icon:individualFeedback,
    },
    {
      title:'反馈统计',
      route:'',
      icon:feedbackStatistics,
    },
    {
      title:'TOP款',
      route:'',
      icon:top,
    },
    {
      title:'单SKU画像',
      route:'',
      icon:sku,
    },
    {
      title:'拣配单',
      route:'',
      icon:pickingList,
    },
    {
      title:'补货单',
      route:'',
      icon:replenishmentNote,
    },
    {
      title:'以图搜图',
      route:'',
      icon:searchImages,
    },
    {
      title:'反馈吧',
      route:'',
      icon:feedback,
    },
    {
      title:'陈列建议',
      route:'',
      icon:displaySuggestions,
    },
  ];

  const renderContent=()=>{
    return (
      <div className={styles.menuWrap}>
        {menuContent&&menuContent?.map((i)=>(
          <div key={i.title} className={styles.menuWrap_content} onClick={()=>{
            history.push(i.route);
          }}>
            <div className={styles.menuWrap_content_image}>
              <img src={i.icon} alt=""  />
            </div>
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
