import React from "react";
import VoteHead from "./VoteHead";
import VoteFoot from "./VoteFoot";
import VoteMain from "./VoteMain";
import subscribe from "./EventBus";
import PropsTypes from 'prop-types'
//方法一属性传值
/* export default class Vote extends React.Component {
    //支持人数由父组件管理
    state = {
        supNum: 0,
        oppNum: 0
    }
    render() {
        let title = this.props.title
        let { oppNum, supNum } = this.state
        return <div>
            <VoteHead title={title} total={supNum + oppNum}></VoteHead>
            <VoteMain supNum={supNum} oppNum={oppNum}></VoteMain>
            <VoteFoot callback={this.handel}></VoteFoot>
        </div>
    }
    handel = type => {
        if (type == 'SUP') {
            this.setState({
                supNum: this.state.supNum + 1
            })
            return
        }
        this.setState({
            oppNum: this.state.oppNum + 1
        })
    }
} */

// 方法二 事件代理
/* export default class Vote extends React.Component {
    constructor(props) {
        super(props)
        this.eventBus = subscribe()
    }
    render() {
        let title = this.props.title
        return <div>
            <VoteHead title={title} eventBus={this.eventBus}></VoteHead>
            <VoteMain eventBus={this.eventBus}></VoteMain>
            <VoteFoot eventBus={this.eventBus}></VoteFoot>
        </div>
    }
} */

// 方法三 上下文
/* export default class Vote extends React.Component {
    //设置祖先上下文中需要存放的内容
    static childContextTypes = {
        title: PropsTypes.string,
        supNum: PropsTypes.number,
        oppNum: PropsTypes.number,
        handle: PropsTypes.func
    }
    getChildContext() {
        //当状态改变时，此方法会被触发执行，更新给后代用的上下文信息
        return {
            title: this.props.title,
            supNum: this.state.supNum,
            oppNum: this.state.oppNum,
            handle: this.handle
        }
    }
    state = {
        supNum: 0,
        oppNum: 0
    }
    render() {
        let title = this.props.title
        return <div>
            <VoteHead ></VoteHead>
            <VoteMain ></VoteMain>
            <VoteFoot ></VoteFoot>
        </div>
    }
    handle = type => {
        if (type === 'SUP') {
            this.setState({
                supNum: this.state.supNum + 1
            })
            return
        }
        if (type === "OPP") {
            this.setState({
                oppNum: this.state.oppNum + 1
            })
            return
        }
    }
} */
// 方法四 redux
/* const ThemeContext = React.createContext()
window.ThemeContext = ThemeContext
export default class Vote extends React.Component {
    render() {
        return <ThemeContext.Provider value={{
            store: this.props.store
        }
        }>
            <VoteHead />
            <VoteMain />
            <VoteFoot />
        </ThemeContext.Provider >
    }
} */
// redux 工程化
/* export default class Vote extends React.Component {
    render() {
        const store = this.props.store
        return <>
            <VoteHead store={store} />
            <VoteMain store={store} />
            <VoteFoot store={store} />
        </>
    }
} */
// react-redux
export default class Vote extends React.Component {
    render() {
        return <>
            <VoteHead />
            <VoteMain />
            <VoteFoot />
        </>
    }
}