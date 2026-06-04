import React, { Component } from 'react'

export default class Child extends Component {

    componentDidMount() 
    {
        console.log("Component Mounted");
    }

    componentDidUpdate(prevProps) 
    {
      console.log("Component Updated");
    }


    shouldComponentUpdate(nextProps) {
        console.log("Component Should Update");
        if(
          Math.abs(nextProps.customer.ETA - this.props.customer.ETA) >= 5 
          || nextProps.customer.status !== this.props.customer.status 
          || nextProps.customer.Priority !== this.props.customer.Priority
        ) 
        {
            return true;
        }
        return false;
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

  render() {
    const { orderId, name, status, ETA, Priority } = this.props.customer
    return (
      <div>
        <h2>Order ID: {orderId}</h2>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>ETA: {ETA} mins</p>
        <p>Priority: {Priority}</p>
      </div>
    )
  }
}
