import './index.css';
import App from './App';
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
// 测试初始化
root.render(
  <App />
);


/*** 测试同步模式 */
// import './index.css';
// import App2 from './App2';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// /**
//  * 启动流程：
//  *  第一步创建三个全局对象：
//  *    - ReactDomRoot对象，在其原型上拥有render,umount方法；
//  *    - fiberRoot对象，保存fiber构建过程中所依赖的全局状态
//  *    - HostRootFiber对象，应用中第一个fiber对象
//  */
// console.error('开始你的奇妙冒险吧少年~')
// console.error('启动流程：第一步创建三个全局对象：ReactDomRoot对象，在其原型上拥有render,umount方法；fiberRoot对象，保存fiber构建过程中所依赖的全局状态;HostRootFiber对象，应用中第一个fiber对象')
// console.error('启动流程：第二步开始render')
// ReactDOM.render(<App2 />, document.getElementById('root'))

