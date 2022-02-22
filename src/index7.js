import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './Vote'
import store from './store/index'
// import { Provider } from 'react-redux'
import { Provider } from './my-react-redux'

/* ReactDOM.render(<>
    <Vote store={store}></Vote>
</>, document.getElementById('root')) */
// react-redux
// =>Provider:把创建的store挂在到祖先元素的上下文中
ReactDOM.render(<Provider store={store}>
    <Vote ></Vote>
</Provider>, document.getElementById('root'))