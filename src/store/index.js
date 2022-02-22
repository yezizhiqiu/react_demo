// import { createStore } from 'redux'
import { createStore } from '../my-redux'
import reducer from './reducers/reducers'
const store = createStore(reducer)
export default store