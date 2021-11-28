import React from 'react';
// 创建一个函数,只要函数中返回一个JSX元素，则为函数式组件
// 传递进来的属性是只读的
//调用组件可以是单闭合双闭合
//使用双闭合，可以把一些子节点当作属性children传给组件,在组件中可以把传递的这些节点放到指定位置 
export function News(props) {
    console.log(props);
    return <div>
        <h3>刘琴大佬</h3>
        <ul>
            <li>webpack</li>
            <li>vue</li>
            <li>react</li>
            <li>{props.index}</li>
        </ul>
        {
            React.Children.map(props.children, item => {
                return <div>
                    @@ {item}
                </div>
            })
        }
    </div>;
}
export default News