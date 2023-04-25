import React from "react";
import  styles from './index.less'; 
import Card from "@/components/Card/index";
import filterIcon from '@/assets/filter.svg';
import { Input } from 'antd-mobile'

export default function Docs() {
  const menuContent=[
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
    {
      number:'eqyi1817hkjhd82',
      img:'',
    },
  ];
  const renderContent=(data:any)=>{
    return (
      <>
      <div className={styles.commodityWrap_content_picture}>

      </div>
      <div className={styles.commodityWrap_content_number}>
        <div className={styles.commodityWrap_content_number_left}></div>
        <div className={styles.commodityWrap_content_number_right}>{data.number}</div>
      </div>
      </>
      
    )
  };

  const bodyStyle={
    padding:0,
  }
  return (
    <div>
      {/* 顶部标题 */}
      <div className={styles.commodityTitle}>
        <Input className={styles.commodityTitle_input} placeholder='输入条码查询' />
        <img className={styles.commodityTitle_filter} src={filterIcon} alt="" />
      </div>
    <div className={styles.commodityWrap}>
    {menuContent&&menuContent?.map((i)=>{
      return (
        <Card 
        className={styles.commodityWrap_content}
         content={renderContent(i)}
        bodyStyle={bodyStyle}
        ></Card>
      )
    })}
  </div>
    </div>
  );
}