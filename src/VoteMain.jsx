import React from "react";
import PropsTypes from 'prop-types'
// import { connect } from 'react-redux'
import { connect } from './my-react-redux'
function computed(supNum, oppNum) {
    let total = supNum + oppNum
    if (total === 0) {
        return '0%'
    }
    return (supNum / total * 100).toFixed(2) + '%'
}
// 方法一
/* export default class VoteMain extends React.Component {
    render() {
        let { oppNum, supNum } = this.props
        return <div>
            <p>支持人数:{supNum}</p>
            <p>反对人数:{oppNum}</p>
            <p>支持率{computed(supNum, oppNum)}</p>
        </div>
    }
} */
//方法二 事件代理
/* export default class VoteMain extends React.Component {
    state = {
        oppNum: 0,
        supNum: 0
    }
    render() {
        let { oppNum, supNum } = this.state
        return <div>
            <p>支持人数:{supNum}</p>
            <p>反对人数:{oppNum}</p>
            <p>支持率{computed(supNum, oppNum)}</p>
        </div>
    }
    componentDidMount() {
        this.props.eventBus.$on('Vote', type => {
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
            }
        })
    }
} */

//方法三 上下文
/* export default class VoteMain extends React.Component {
    static contextTypes = {
        title: PropsTypes.string,
        oppNum: PropsTypes.number,
        supNum: PropsTypes.number
    }
    render() {
        let { oppNum, supNum } = this.context
        return <div>
            <p>支持人数:{supNum}</p>
            <p>反对人数:{oppNum}</p>
            <p>支持率{computed(supNum, oppNum)}</p>
        </div>
    }
} */
// 方法四 redux
/* export default class VoteMain extends React.Component {
    render() {
        const {supNum,oppNum}=this.props.store.getStat
        return <ThemeContext.Consumer>
            {context => {
                this.context = context
                const { supNum, oppNum } = this.context.store.getState()
                return <div>
                    <p>支持人数:{supNum}</p>
                    <p>反对人数:{oppNum}</p>
                    <p>支持率{computed(supNum, oppNum)}</p>
                </div>
            }}
        </ThemeContext.Consumer>
    }
    componentDidMount() {
        const unsubscribe = this.props.store.subscribe(() => {
            this.forceUpdate()
            //把当前新增的方法从事件池中移除
            //unsubscribe()
        })
    }
} */
// redux工程化
/* export default class VoteMain extends React.Component {
    render() {
        const { supNum, oppNum } = this.props.store.getState().vote
        return <>
            <div>
                <p>支持人数:{supNum}</p>
                <p>反对人数:{oppNum}</p>
                <p>支持率{computed(supNum, oppNum)}</p>
            </div>
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
//react-redux

class VoteMain extends React.Component {
    render() {
        const { supNum, oppNum } = this.props
        return <div>
            <p>支持人数:{supNum}</p>
            <p>反对人数:{oppNum}</p>
            <p>支持率{computed(supNum, oppNum)}</p>
        </div>
    }
}
export default connect(state => state.vote)(VoteMain)