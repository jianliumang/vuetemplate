/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
// import promise from 'es6-promise';
// promise.polyfill();
import axios from 'axios';
import { Loading, Message } from 'element-ui';
import router from '../../router'
// import 'babel-polyfill'
// 超时时间
// axios.defaults.timeout = 10000;
// http请求拦截器
var loadinginstace;
axios.interceptors.request.use(config => {
  let token = localStorage.getItem("token"); //从缓存中取token
  if(token){
    config.headers.token = token;  //将token放到请求头发送给服务器
  };
  return config;
}, error => {
  // loadinginstace.close();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error);
})
// http响应拦截器
axios.interceptors.response.use(response => {// 响应成功关闭loading
  // loadinginstace.close()
  // console.log(response);
  
  // if(response.data.code!=200){
  //   Message.error({
  //     message: 'error:  '+response.data.code+"==>"+response.data.msg
  //   })
  // }
  return response
}, error => {
  // try {
    console.log(error)
    // console.log(error.response);
    if (error.response) {
      // if(error.response.data.result==null){
      //   this.$router.replace('/login');
      // }
      switch (error.response.status) {
        case 500:
          router.replace('/login');  
        case 401://token过期，清除token并跳转到登录页面
          localStorage.clear();
          var baurl = window.location.href;
      　　router.replace({
            path: '/login',
            query: { backUrl: baurl }
          });           
          return;
      }
    };
  // loadinginstace.close()
    Message.error({
      message: '加载失败'
    })
  return Promise.reject(error.response.data)
})

export default axios