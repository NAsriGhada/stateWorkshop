import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        console.log('construction')
        super(props)
        this.state = {
            count: 0,
            color: 'green',
            text: 'The component is going to be unmounted',
        }
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count > 0 ? this.state.count-1 : this.state.count })
    }


    componentDidMount() {
        console.log("component did mount")
        setTimeout(() => {
            document.getElementById('unique').innerHTML = 'Component has been mouted!';
        }, 2000);
    }
    
    componentDidUpdate() {
        console.log("component did update", this.state.count)
        if( this.state.count ){
            document.getElementById('update').innerHTML = 'counter is at ' + this.state.count
            this.timer = setTimeout(() =>{
                this.setState({color: ('red')})
            }, 1000)
    }
    }

    componentWillUnmount() {
        console.log("component will unmount")
        alert(this.state.text);
    }


    render() {
        console.log("rendering")
        return (
            <div>
                <button onClick={() => this.decrement()}>-</button>
                <span>Counter: {this.state.count}</span>
                <button onClick={() => this.increment()}>+</button>
                <div id='unique'></div>
                <div style={{color: this.state.color }} id='update'></div>
            </div>
        )
    }
}
