import React, { Component } from 'react'
//rcc: shortcut for creating class based component
export default class Counter extends Component {

  constructor(props) {
    super(props); //always call super in constructor of class based component
    console.log('Constructor called', props.initialCount);
    this.state = {
      count: props.initialCount || 0, //initial count value from props or default to 0
      title: 'Counter App',
      description: ''
    }
  }

  componentDidMount() {
    console.log('Component Did Mount called');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update called', prevProps, prevState);
    console.log('Prev Props:', prevProps);
    console.log('Prev State:', prevState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update called', nextProps, nextState);
    return false; //ComponentDidUpdate will not be called and component will not re-render when state or props change
    // return true; //ComponentDidUpdate will be called and component will re-render when state or props change
  }

  componentWillUnmount() {
    console.log('Component Will Unmount called');
  }

  render() {
    console.log('Render called');
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count+1})}> + </button>
        <br></br>
        <button onClick={() => this.setState({count: this.state.count-1})}> - </button>
        <br></br>
        <input type="text" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
        <br></br>
        <p>{this.state.description.trim() ? this.state.description : 'No Description given'}</p>
      </div>
    )
  }
}
