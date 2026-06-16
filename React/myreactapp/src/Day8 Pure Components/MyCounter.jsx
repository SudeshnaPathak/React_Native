import React, { Component, PureComponent } from 'react'

export default class MyCounter extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 10
        }
    }
    
  render() {
    console.log("MyCounter rendered");
    return (
      <div>
        <h2>My Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({count: 10})}>Increment</button>
      </div>
    )
  }
}
