import React from "react"
/**
 * 受控组件：受状态管控的组件=>数据驱动视图
 * 非受控组件:不受...=>直接DOM操作ref
 */
export default class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            {/* <input type="text" ref="inputBox" /> */}
            <input type="text" ref={x => {
                // x当前的元素对象
                this.inp = x
            }} />
        </div>
    }
    componentDidMount() {
        // console.log(this.refs);
        // this.refs.inputBox.focus()
        this.inp.focus()
    }
}