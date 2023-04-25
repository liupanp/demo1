import {history,useModel} from 'umi';
import Button from '@/components/Button/index';
import React from 'react';
import Home from "./home/index";

const HomePage = () => {
  return (
    <div style={{padding:'20px'}}>
     <Home />  
      {/* <div style={{marginTop:'30px'}} onClick={()=>{
        history.push('/login')
      }}>
        登陆
      </div> */}
    </div>
  );
};

export default HomePage;
