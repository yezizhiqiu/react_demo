import *as TYPES from '../action-types'
const voteAction = {
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
}
export default voteAction;