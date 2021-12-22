import React from 'react';
import ReactDOM from 'react-dom';
import Test2 from './Test2'
import Vote1 from './Vote1'
import Vote2 from './Vote2'
import Vote from './Vote'
import Parent from './Test3'
/*REDUX */
import { createStore } from 'redux'
// reducer修改容器状态唯一途径
function reducer(state = {
    //原始容器中的状态信息，没有设置 给初始值
    supNum: 0,
    oppNum: 0,
    title: 'react比vue棒'
}, action) {
    // action是dispatch派发的行为对象
    state = JSON.parse(JSON.stringify(state))//深克隆
    switch (action.type) {
        case 'SUPPORT':
            state.supNum++
            break;
        case 'OPPOSE':
            state.oppNum++
            break;
    }
    //返回啥就把原始容器中的状态替换啥
    return state
}
const store = createStore(reducer)
ReactDOM.render(<>
    {/* <Test2 /> */}
    {/* <Vote1 title="react比vue好"></Vote1>
    <Vote2 title="vue比react好"></Vote2> */}
    <Parent />
    {/* <Vote title="react比vue好"></Vote>
    <Vote title="vue比react好"></Vote> */}
    <Vote store={store}></Vote>
</>, document.getElementById('root'))