import React,{useRef} from "react";

const Upload = () => {
  const inputRef=useRef(null);
  // 压缩图片
  const compress=(img)=>{
    // // 默认按比例压缩
    // const width = img.width;
    // const height = img.height;
    // const scale = width / height;
    // // 生成canvas
    // const canvas = document.createElement("canvas");
    // const ctx = canvas.getContext("2d");
    // canvas.width = this.width || width;
    // canvas.height = this.height || width / scale || height;
    // // 铺底色
    // ctx.fillStyle = "#fff";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(img, 0, 0, width, height);

    // // quality值越小，所绘制出的图像越模糊。
    // let quality = 0.1; // 默认图片质量为0.1，进行最小压缩
    // if (this.quality && this.quality <= 1 && this.quality > 0) {
    //   quality = this.quality;
    // }
    // const base64 = canvas.toDataURL("image/jpeg", quality);
    // return base64;
  };

  return (
    <div style={{padding:'20px'}}>
     <div>指明需要图片</div>
      <input type="file" accept='image/*' />

      <div>指明需要多张图片</div>
      <input type="file" multiple accept='image/*' />

      <div>指明调用摄像头获取图片</div>
      <input type="file" capture='camera' accept='image/*' />

      <div>指明调用摄像头并多张图片</div>

      <input type="file" ref={inputRef}
      onChange={(e)=>{
        console.log(e.target.value,'上传');
        
      }}
       multiple capture='camera' accept='image/*' />

    </div>
  );
};

export default Upload;
