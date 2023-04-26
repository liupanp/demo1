import React from "react";
import  styles from './index.less'; 
import Card from "@/components/Card/index";
import commodity1 from '@/assets/image/commodity1.png';
import commodity2 from '@/assets/image/commodity2.png';
import SearchBar from '@/components/SearchBar/index';

export default function Docs() {
  const menuContent=[
    {
      number:'eqyi1817hkjhd82',
      img:commodity1,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity2,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity2,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity1,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity1,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity2,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity1,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity2,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity1,
    },
    {
      number:'eqyi1817hkjhd82',
      img:commodity2,
    },
  ];
  const renderContent=(data:any)=>{
    return (
      <>
      <div className={styles.commodityWrap_content_picture}>
        <img src={data.img} alt="" />
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

  // 搜索事件
  const handleSearch=(e: any)=>{
    console.log(e,'搜索事件');
  };

  // 左侧扫码
  const handleScan=()=>{
    console.log('左侧扫码');
  };

  // 右侧筛选
  const handleFilter=()=>{
    console.log('右侧筛选');
  };

  return (
    <div>
      {/* 顶部标题 */}
      <div className={styles.commodityTitle}>
        <SearchBar 
        onSearch={(e: any)=>handleSearch(e)}
        onScan={()=>handleScan()}
        onFilter={()=>handleFilter()}
         placeholder={'输入条码'} />
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