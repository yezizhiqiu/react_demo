import React from "react";
import PropsTypes from 'prop-types'
// 方法一
/* export default class VoteHead extends React.Component {
    render() {
        let { title, total } = this.props
        return <>
            <h4>
                {title}
                (N:{total})
            </h4>
        </>
    }
} */
//方法二 事件代理
/* export default class VoteHead extends React.Component {
    state = {
        n: 0
    }
    render() {
        let { title, total } = this.props
        return <>
            <h4>
                {title}
                (N:{this.state.n})
            </h4>
        </>
    }
    componentDidMount() {
        this.props.eventBus.$on('Vote', () => {
            this.setState({
                n: this.state.n + 1
            })
        })
    }
} */
//方法三 上下文
/* export default class VoteHead extends React.Component {
    static contextTypes = {
        title: PropsTypes.string,
        oppNum: PropsTypes.number,
        supNum: PropsTypes.number
    }
    render() {
        let { title, oppNum, supNum } = this.context
        return <>
            <h4>
                {title}
                (N:{oppNum + supNum})
            </h4>
        </>
    }
} */
// 方法四 redux
/* export default class VoteHead extends React.Component {
    render() {
        const ThemeContext = window.ThemeContext
        return <ThemeContext.Consumer>
            {context => {
                this.context = context
                const { title, supNum, oppNum } = this.context.store.getState()
                return <h4>{title}(N:{supNum + oppNum})</h4>
            }}
        </ThemeContext.Consumer>
    }
    componentDidMount() {
        const unsubscribe = this.context.store.subscribe(() => {
            this.forceUpdate()
            //把当前新增的方法从事件池中移除
            //unsubscribe()
        })
    }
} */
// redux 工程化
/* export default class VoteHead extends React.Component {
    render() {
        const { title, supNum, oppNum } = this.props.store.getState().vote
        return <>
            <h4>{title}(N:{supNum + oppNum})</h4>
        </>
    }
    componentDidMount() {
        const unsubscribe = this.props.store.subscribe(() => {
            this.forceUpdate()
            //把当前新增的方法从事件池中移除
            //unsubscribe()
        })
    }
} */
import { connect } from 'react-redux'
class VoteHead extends React.Component {
    render() {
        const { title, supNum, oppNum } = this.props
        return <>
            <h4>{title}(N:{supNum + oppNum})</h4>
        </>
    }

}
/**
 * connect高阶组件
 * connect(mapStateToProps,mapDispatchToProps)
 * 而且帮我们做了一件事:基于subscribe向事件池中追加了重新渲染当前组件的方法 
 */
function mapStateToProps(state) {
    //state =>store.getState()获取容器中的公共状态
    return {
        //返回谁就把谁当作属性传递给组件
        // title:state.vote.title,
        // supNum:state.vote.supNum
        ...state.vote
    }
}
export default connect(state => state.vote)(VoteHead)