import React from 'react'
let ThemeContext = React.createContext()

class Child extends React.Component {
    render() {
        return <ThemeContext.Consumer>
            {
                context => {
                    return <>  我是孩子{context.m} {context.n}</>
                }
            }
        </ThemeContext.Consumer>
    }
}
class Parent extends React.Component {
    render() {
        return <ThemeContext.Provider value={
            { n: 0, m: 20 }
        }>
            <Child />
        </ThemeContext.Provider>
    }
}
export default Parent