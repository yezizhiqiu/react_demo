import { combineReducers } from "redux";
import voteReducer from "./voteReducer";
const reducer = combineReducers({
    /**
     * state={
     *      vote:{
     *          title:'xx'
     *          support:0,
     *          oppose:0
     *      }
     * }
     *  store.getState().vote.title
     */
    vote: voteReducer
})
export default reducer;