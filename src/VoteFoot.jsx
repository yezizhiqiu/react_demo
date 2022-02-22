import React from "react";
import PropsTypes from 'prop-types'
// 方法一
/* export default class VoteFoot extends React.Component {
    render() {
        let { callback } = this.props
        return <div>
            <button onClick={ev => {
                callback('SUP')
            }}>支持</button>
            <button onClick={ev => {
                callback('OPP')
            }}>反对</button>
        </div>
    }
} */
//方法二 事件传递
/* export default class VoteFoot extends React.Component {
    render() {
        let { eventBus } = this.props
        return <div>
            <button onClick={ev => {
                eventBus.$emit('Vote', 'SUP')
            }}>支持</button>
            <button onClick={ev => {
                eventBus.$emit('Vote', 'OPP')
            }}>反对</button>
        </div>
    }
} */
//方法三 上下文
/* export default class VoteFoot extends React.Component {
    static contextTypes = {
        handle: PropsTypes.func
    }
    render() {
        let { handle } = this.context
        return <div>
            <button onClick={ev => {
                handle('SUP')
            }}>支持</button>
            <button onClick={ev => {
                handle('OPP')
            }}>反对</button>
        </div>
    }
} */
// 方法四 redux
/* export default class VoteFoot extends React.Component {
    render() {
        const ThemeContext = window.ThemeContext
        return <ThemeContext.Consumer>
            {context => {
                this.context = context
                return <>
                    <button onClick={ev => {
                        this.context.store.dispatch({
                            type: 'SUPPORT'
                        })
                    }}>支持</button>
                    <button onClick={ev => {
                        this.context.store.dispatch({
                            type: 'OPPOSE'
                        })
                    }}>反对</button>
                </>
            }}

        </ThemeContext.Consumer>
    }

} */
// redux工程化
import action from "./store/actions/actions";
/* export default class VoteFoot extends React.Component {
    render() {
        return <>
            <button onClick={ev => {
                this.props.store.dispatch(action.vote.changeSupNum())
            }}>支持</button>
            <button onClick={ev => {
                this.props.store.dispatch(action.vote.changeOppNum())
            }}>反对</button>

        </>
    }

} */
// import { connect } from 'react-redux'
import { connect } from './my-react-redux'
class VoteFoot extends React.Component {
    render() {
        let { changeSupNum, changeOppNum } = this.props
        console.log(changeSupNum);
        return <>
            <button onClick={ev => {
                changeSupNum()
            }}>支持</button>
            <button onClick={ev => {
                changeOppNum()
            }}>反对</button>

        </>
    }

}
export default connect(null, action.vote)(VoteFoot)

/* {
    changeSupNum() {
        return {
            type: TYPES.VOTE_SUPPORT
        }
    },
    changeOppNum() {
        return {
            type: TYPES.VOTE_OPPOSE
        }
    }
} */
// react-redux帮我们把action-creators变为派发模式
/* function mapDispatchToProps(dispatch) {
    //dispatch=>store.dispatch
    return {
        changeSupNum() {
            dispatch(action.vote.changeSupNum)
        },
        changeOppNum() {
            dispatch(action.vote.changeOppNum)
        }
    }
} */
