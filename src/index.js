import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

/**
 * 启动流程：
 *  第一步创建三个全局对象：
 *    - ReactDomRoot对象，在其原型上拥有render,umount方法；
 *    - fiberRoot对象，保存fiber构建过程中所依赖的全局状态
 *    - HostRootFiber对象，应用中第一个fiber对象
 */
console.error('开始你的奇妙冒险吧少年~')
console.error('启动流程：第一步创建三个全局对象：ReactDomRoot对象，在其原型上拥有render,umount方法；fiberRoot对象，保存fiber构建过程中所依赖的全局状态;HostRootFiber对象，应用中第一个fiber对象')
const root = ReactDOM.createRoot(document.getElementById('root'));
console.error('启动流程：第二步开始render')
root.render(
  <div>divdom节点</div>
  // <BrowserRouter>
  //   {/* <App /> */}
  //   <div>divdom节点</div>
  // </BrowserRouter>
  // <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

