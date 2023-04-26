import React,{useRef,useState} from "react";
import  styles from './index.less'; 
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Upload = () => {
  const inputRef=useRef(null);
  const [imgUrl,setImgUrl]=useState();
  const [imgUrlList,setImgUrlList]=useState([]);

  // 拿到图片url
  const getImageUrl=(e)=>{
     let reader = new FileReader();
      // 读取文件并以数据 URI 形式保存在 result 属性中
      reader.readAsDataURL(e.target.files[0]); 
      reader.onload = function(e) {
          let imgUrl = e.target.result;
          setImgUrl(imgUrl);
      }  
  };
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

  console.log(imgUrlList,'imgUrlList===');

  const createObjectURL=(file)=>{
   if (window.URL) {
       return window.URL.createObjectURL(file);
   } else if (window.webkitURL) {
       return window.webkitURL.createObjectURL(file);
   } else {
       return null
   }
}

  return (
    <div style={{padding:'20px'}} >
     <div>
      指明需要图片
      <input type="file" accept='image/*' />

     </div>

      <div className={styles.uploadWrap_content}>
        指明需要多张图片
      <input type="file" 
      multiple accept='image/*'
      onChange={(e)=>{
        let arr=[];
      for (const key in e.target.files) {
        if (Object.prototype.hasOwnProperty.call(e.target.files, key)) {
          const element = e.target.files[key];
          let url = createObjectURL(element);
          arr.push(url);
          setImgUrlList(arr);
      }
    }     
      }}
       />
      <PhotoProvider>
       {imgUrlList?.map((i)=>{
        return(
          <PhotoView src={i}>
          <img className={styles.uploadWrap_image} src={i} alt=""  />
          </PhotoView>
        )
       })}
        </PhotoProvider>

        </div>

      {/* <div>指明调用摄像头获取图片</div>
      <input type="file" capture='camera' accept='image/*' /> */}

      <div className={styles.uploadWrap}>
        指明调用摄像头并多张图片
          <input type="file" ref={inputRef}
        onChange={(e)=>getImageUrl(e)}
       multiple capture='camera' accept='image/*' />
        </div>
    
       {imgUrl&&(
      //  <img className={styles.uploadWrap_image} src={imgUrl} alt=""  />
      <PhotoProvider>
      <PhotoView src={imgUrl}>
      <img className={styles.uploadWrap_image} src={imgUrl} alt=""  />
      </PhotoView>
    </PhotoProvider>
       )}
    </div>
  );
};

export default Upload;
