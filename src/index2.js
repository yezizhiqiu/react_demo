import React from 'react';
import ReactDOM from 'react-dom';
import News from './News'
ReactDOM.render(<>
    <News index="1/" />
    <News>
        双闭合组件
        <button>w我是按钮</button>
    </News>
</>, document.getElementById('root'))