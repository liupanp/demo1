import React from "react";
import Tabs from "./Tabs";

export default (props) => {
  return (
    <>
    {/* 封装底部tab */}
      <Tabs {...props} />
    </>
  );
};
