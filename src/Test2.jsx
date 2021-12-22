/**
 * REACT HOOKS:REACT提供很多新的钩子函数，可以让函数式组件装有状态和常用的生命周期，以及ref/context
 * =>useState(初始状态值)=>[当前最新的状态值，修改状态的方法]
 */
import React, { useState, useEffect, useRef, useReducer } from "react";
console.dir(React);
/* let _state;
function useState(initState) {
    if(!_state){
        _state=initState
    }
    function change(val) {
        _state=val
        //通知组件重新渲染(通知函数重新执行)
    }
    return [_state,change]
} */
// export default function Test2(props) {
//     // let n = props.n ? props.n : 0
//     // let m = props.m ? props.m : 0
//     //官方推荐每次useState只控制一个状态信息
//     let [n, changeN] = useState(0)
//     let [m, changeM] = useState(0)
//     return <div>
//         {n}+{m}={n + m}
//         <button onClick={
//             ev => {
//                 changeN(n + 1)//修改状态并且通知组件重新渲染(函数重新执行)
//             }
//         }>+N</button>
//         <button onClick={
//             ev => {
//                 changeM(m + 1)
//             }
//         }>+M</button>
//     </div>
// }
// export default function Test2(props) {
//     let [state, setState] = useState(() => {
//         //初始状态值设置成函数：懒初始化状态
//         return {
//             n: 0,
//             m: 0
//         }
//     })
//     //使用生命周期
//     // useEffect(() => {
//     //     // DidMount && DidUpdate
//     //     console.log('All');
//     // })
//     useEffect(() => {
//         //DicMout
//         //console.log('DicMout');
//         inputBox.current.focus()
//         inputBox.current.value = 100
//     }, [])
//     // useEffect(() => {
//     //     //DidUpdate只有依赖的状态改变才会执行
//     //     console.log('DidUpdate -changeN');
//     // }, [state.n])


//     //使用REF
//     let inputBox = useRef()//=>{current: undefined}
//     console.log(inputBox);
//     return <div>
//         <input type="text" ref={inputBox} />
//         {state.n}+{state.m}={state.n + state.m}
//         <button onClick={
//             ev => {
//                 setState({
//                     ...state,
//                     n: state.n + 1
//                 })
//             }
//         }>+N</button>
//         <button onClick={
//             ev => {
//                 setState({
//                     ...state,
//                     m: state.m + 1
//                 })
//             }
//         }>+M</button>
//     </div>
// }
function reducer(state, action) {
    state = { ...state }
    switch (action.type) {
        case 'ADDN':
            state.n++
            break;
        case 'ADDM':
            state.m++
            break;
    }
    return state;
}
export default function Test2(props) {
    //类似于redux的管理机制 dispatch=>reducer=>修改状态
    let [state, dispatch] = useReducer(reducer, {
        n: 0, m: 0
    })

    return <div>
        {state.n}+{state.m}={state.n + state.m}
        <button onClick={ev =>
            //派发行为对象给REDUCER
            dispatch({
                type: 'ADDN'
            })
        }>+N</button>
        <button onClick={ev =>
            dispatch({
                type: 'ADDM'
            })
        }>+M</button>
    </div>
}