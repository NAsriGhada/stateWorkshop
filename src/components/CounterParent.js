import React, { Component } from 'react'
import Counter from './Counter'

export default class CounterParent extends Component {

    constructor(props) {
        super(props)
        this.state ={
            show: false
        }
    }

    toggle() {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggle()}>show</button>
                {this.state.show ? <Counter/> : null}
            </div>
        )
    }
}
