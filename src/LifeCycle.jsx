// import React from "react"
// /**
//  * 生命周期
//  * 
//  */
// export default class lifeCycle extends React.Component {
//     //===第一次调用组件渲染的周期流程
//     // 1.给属性设置默认值(设置默认规则)
//     // 2.constructor
//     //    =>设置初始状态
//     // 3.componentWillMount第一次挂在之前
//     //    => 向服务器发送请求
//     // 4.render渲染
//     // 5.componentDidMout第一次挂载后 
//     //    => 把虚拟DOM转换为真实DOM，我们可以获取DOM元素操作

//     // ==== 当组件状态发生改变 setState
//     //  1.shouldComponentUpdate是否允许组件重新渲染(返回true继续，返回false停止)
//     //  2.componentWillUpdate重新渲染之前
//     //  3.render重新渲染
//     //  4.componentDidUpdate重新渲染之后

//     // ==== 当组件属性发生改变 父组件重新传递最新的属性信息
//     // 1.componentWillReceiveProps 在接受最新属性之前
//     // 2.shouldComponentUpdate是否允许组件重新渲染
//     // ....

//     // componentWillUnmount卸载组件之前
//     constructor(props) {
//         super(props)
//         console.log('constructor');
//         this.state = {
//             data: [],
//             n: 0
//         }
//     }
//     // componentWillMount() {
//     //     console.log('componentWillMount');
//     //     setTimeout(_ => {
//     //         this.setState({
//     //             data: [100, 200]
//     //         })
//     //     }, 2000)
//     // }
//     handel() {
//         // =>this是undefined(REACT中的事件是合成事件 基于pc移动兼容 所有事件都是基于事件代理，事件对象也是合成的)
//         console.log(this);
//     }
//     render() {
//         let { data, n } = this.state
//         console.log('render');
//         return <div>
//             {data}==={n}
//             <button onClick={() => {
//                 this.forceUpdate()
//             }}>强制刷新</button>
//             <button onClick={this.handel()}>+</button>
//         </div>
//     }
//     componentDidMount() {
//         console.log('componentDidMount');
//     }
//     shouldComponentUpdate(nextProps, nextState) {//性能优化 对比数据
//         console.log('shouldComponentUpdate', nextProps, nextState);
//         //nextProps nextState最新要修改的属性和状态
//         //this.state this.props 修改之前
//         //this.forceUpdate()不会执行这个函数周期，直接强制更新当前组件
//         return true
//     }
//     componentWillUpdate() {
//         console.log('componentWillUpdate');
//     }
//     componentDidUpdate() {
//         console.log('componentDidUpdate');
//     }
// }
import React from "react"
/**
 * 生命周期
 * 
 */
export default class lifeCycle extends React.PureComponent {
    //===第一次调用组件渲染的周期流程
    // 1.给属性设置默认值(设置默认规则)
    // 2.constructor
    //    =>设置初始状态
    // 3.componentWillMount第一次挂在之前
    //    => 向服务器发送请求
    // 4.render渲染
    // 5.componentDidMout第一次挂载后 
    //    => 把虚拟DOM转换为真实DOM，我们可以获取DOM元素操作

    // ==== 当组件状态发生改变 setState
    //  1.shouldComponentUpdate是否允许组件重新渲染(返回true继续，返回false停止)
    //  2.componentWillUpdate重新渲染之前
    //  3.render重新渲染
    //  4.componentDidUpdate重新渲染之后

    // ==== 当组件属性发生改变 父组件重新传递最新的属性信息
    // 1.componentWillReceiveProps 在接受最新属性之前
    // 2.shouldComponentUpdate是否允许组件重新渲染
    // ....

    // componentWillUnmount卸载组件之前
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            n: 0,
            x: [10, 20]
        }
    }

    render() {
        let { x, n } = this.state
        console.log('render');
        return <div>
            {n}==={x}
            {/* <button onClick={this.handel.bind(this)}>+</button> */}
            <button onClick={this.handel}>+</button>
        </div>
    }
    //PureComponent相对Component来说，内部给组件加了shouldComponentUpdate把属性和状态浅对比，以此性能优化（自己设置了shouldComponentUpdate，以自己设置的为主）
    /* shouldComponentUpdate(nextProps, nextState) {
        //拿当前的状态和最新修改的状态 进行对比(浅对比)，如果一样则不渲染，不一样才渲染
        if (this.state.n === nextState.n) {
            return false
        }
        return true
    } */
    handel = ev => {
        //console.log(this, ev);
        let arr = this.state.x
        arr.push(30)
        console.log(arr);
        this.setState({
            //不管状态是否改变，都会控制render重新渲染
            x: [...arr]
        })
    }
    /* handel(ev) {
        // =>this是undefined(REACT中的事件是合成事件 基于pc移动兼容 所有事件都是基于事件代理，事件对象也是合成的)
        //ev.persist() 把合成对象中的值暴露出来
        console.log(this, ev);
    } */
}