import React from 'react'
//安装的第三方插件，设置属性的规则
import PropTypes from 'prop-types'
/**
 * 函数组件特点
 * 静态组件
 * 每次调用，都会重新进行渲染和计算，把渲染后的结果呈现在页面中
 * 渲染完成后，呈现的内容不会改变，除非重新调用该组件
 */
/* export default function Clock(prop) {
    return <div>
        {new Date().toLocaleString()}
    </div>
} */
/**
 * 类组件:创建一个类，其继承React.Component或React.pureComponent,此类称为类组件
 * 动态组件
 * REACT中基于状态管理动态组件(类组件)
 * =>设置初始状态值
 * =>修改状态:setState修改组件状态重新渲染
 */
export default class Clock extends React.Component {
    //设置属性规则
    static defaultProps = {
        m: 100
    }
    static propTypes = {
        m: PropTypes.number,
        x: PropTypes.string.isRequired
    }
    //constructor调取组件，创建类的一个实例,首先执行constructor把属性·上下文等传递进来
    constructor(props) {
        super(props)//React.Component.call(this,props)
        console.log(this.props);
        //创建初始状态
        this.state = {
            time: new Date().toLocaleString(),
            n: 0
        }
    }
    //render渲染组件内容
    render() {
        return <div>
            {this.state.time}
            ====
            {this.state.n}
        </div>
    }
    //componentDidMount：生命周期，第一次渲染完
    componentDidMount() {
        setInterval(_ => {
            // this.state.time = new Date().toLocaleString()
            // console.log(this.state);
            //修改状态通知组件重新渲染
            this.setState({
                time: new Date().toLocaleString()
            }, function () {
                console.log('修');
            })
        }, 1000)
    }
}