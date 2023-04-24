import React,{useState} from "react";
import TabStyled from "./TabStyled";
import { JumboTabs } from 'antd-mobile';

const Tabs = (props) => {
  const { content, ...rest } = props;
  const [tabIdx,setTabIdx]=useState(0);
  const getWidth=(data)=>{
    // 根据选项计算宽度
    return 100/Number(data.length)+'%';
  }

  return <TabStyled {...rest}>
    <JumboTabs>
      {content&&content.map((i,index)=>{
      return (
        <JumboTabs.Tab title={i.tabs} description="描述文案" key="fruits">
        {i.tabs}
      </JumboTabs.Tab>
      );
    })}
    </JumboTabs>

    {content&&content.map((i,index)=>{
      return (
        <div className="tab_content" key={i.tabs} onClick={()=>{
          i?.handleClick();
          setTabIdx(index);
          }} style={{width:getWidth(content),color:tabIdx==index?'#0058FF':''}}>
          {i.tabs}
        </div>
      );
    })}
    </TabStyled>;
};

export default Tabs;
