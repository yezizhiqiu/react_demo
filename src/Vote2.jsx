
import React from "react";
function computed(supNum, oppNum) {
    let total = supNum + oppNum
    if (total === 0) {
        return '0%'
    }
    return (supNum / total * 100).toFixed(2) + '%'
}
export default class Vote2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tile: props.title,
            supNum: 0,
            oppNum: 0
        }
    }
    render() {
        let { title, oppNum, supNum } = this.state
        return <div>
            <h4>{title}</h4>
            <div>
                <p>支持人数:{supNum}</p>
                <p>反对人数:{oppNum}</p>
                <p>支持率{computed(supNum, oppNum)}</p>
            </div>
            <div>
                <button onClick={ev => {
                    this.setState({
                        supNum: this.state.supNum + 1
                    })
                }}>支持</button>
                <button onClick={ev => {
                    this.setState({
                        oppNum: this.state.oppNum + 1
                    })
                }}>反对</button>
            </div>
        </div>
    }
}
