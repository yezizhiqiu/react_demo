import React from 'react';

export default class Test1 extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        n: 0,
        m: 0
    }
    // componentWillMount() {//合并处理
    //     this.setState({
    //         n: this.state.n + 1
    //     })
    // }
    // componentDidMount() {
    //     this.setState({
    //         n: this.state.n + 1
    //     })
    // }
    componentDidMount() {
        this.btn.addEventListener('click', () => {
            this.setState({
                n: 10
            })
            console.log('ok');
        })
    }
    render() {
        console.log('render');
        return <div>
            {this.state.n}==={this.state.m}
            {/* <button onClick={this.handel}>+</button> */}
            <button ref={x => this.btn = x}>+</button>
        </div>
    }
    handel = () => {
        /* this.setState({
            n:this.state.n+1
        }) */
        /* this.setState({
            n: 10
        })
        this.setState({
            m: 20
        })
        this.setState({
            n: 30
        }) */
        this.setState({
            n: 10
        }, () => {
            //本次更新完成后触发执行
        })
        setTimeout(() => {
            this.setState({
                n: 10
            })
            this.setState({
                m: 20
            })
            console.log('ok');
        }, 1000);
        //console.log('ok');
    }
}
/**
 * setState本身在生命周期函数或在合成事件中是异步的
 * =>保证REACT本身生命周期函数执行的顺序不紊乱
 * =>保证其实现渲染队列机制（可以合并SET-STATE统一渲染）
 *
 * 在原生的事件绑定中和其他异步操作中的SET-STATE是同步的
 * =>没有渲染队列效果了
 *
 */