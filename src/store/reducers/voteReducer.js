import *as TYPES from '../action-types'
const initState = {
    supNum: 0,
    oppNum: 0,
    title: 'react比vue棒'
}
export default function voteReducer(state = initState, action) {
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TYPES.VOTE_SUPPORT:
            state.supNum++
            break;
        case TYPES.VOTE_OPPOSE:
            state.oppNum++
            break;
    }
    //返回啥就把原始容器中的状态替换啥
    return state
}