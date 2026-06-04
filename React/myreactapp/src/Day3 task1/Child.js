import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString(),
      ticks: 0,
    }
  }

  componentDidMount() 
  {
    console.log("Component Mounted");
    this.timer = setInterval(() => {
      if (this.props.showSeconds) {
        this.setState(prev => ({
          time: new Date().toLocaleTimeString(),
          ticks: prev.ticks + 1
        }))
      }
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    console.log("Component Updated");
  }

  shouldComponentUpdate(nextProps) {
    console.log("Component Should Update");
    if(nextProps.showSeconds !== this.props.showSeconds) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.time}</h2>
        <p>Current Theme: {this.props.theme}</p>
        <p>Ticks: {this.state.ticks}</p>
      </div>
    )
  }
}
