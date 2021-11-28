// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.less';
import { createElement, render } from './selJSX';
render(createElement("div", {
  className: "box",
  style: {
    fontSize: '20px'
  },
  index: 0
}, "\u5218\u7434\u662F\u4E2A\u5927\u50BB\u903C"), document.getElementById('root'))
// {}存放js表达式
// 不能直接放对象（除数组外和几种特殊情况外，style必须设置对象值才行，虚拟DOM对象没问题
// null undefined代表空元素
// let str = "test"
// let obj = {
//   fontSize: '20px'
// }
// let arr = [10, 20, 30]
// ReactDOM.render(
//   <>
//     <span className='box' style={obj}>{str}</span>
//     {str}
//     {arr}
//     {
//       arr.map(item => {
//         return <a href="" key={item}>{item}</a>
//       })
//     }
//   </>,
//   document.getElementById('root')
// );

// 虚拟DOM(JSX)=>真实DOM(页面)

// ReactDOM.render(<div
//   className="box"
//   style={{
//     fontSize: '20px'
//   }}
//   index={0}
// >
//   react_demo
// </div>, document.getElementById("root"))


//1. 基于babel-preset-react-app把jsx变为React.createElement(....)
//第一项标签名(或者函数组件/类组件)
//第二项给标签设置属性 null
//第三项或者更多项: 标签的子节点(文本节点)=>所有的元素节点都会重新React.createElement
// let JSXOBJ = React.createElement("div", {
//   className: "box",
//   style: {
//     fontSize: '20px'
//   },
//   index: 0
// }, "react_demo");
// console.log(JSXOBJ);
//2.执行React.createElement创建JSX虚拟DOM
/**
 * type:标签名/组件
 * props：{
 *  className：类名
 *  children：子节点内容(没有子节点就没有这个属性，否则一个或一个数组虚拟DOM)
 * }
 */

//3.ReactDom.render把虚拟DOM变为真实的DOM对象(渲染到页面中)
//4.Vue-loader把template语法解析为虚拟DOM对象_vnode。