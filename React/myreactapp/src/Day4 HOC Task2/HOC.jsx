import React from 'react'

export default function HOC(WrappedComponent, title, backgroundColor) { 
    return function EnhancedComponent(props) 
    {
      return (
        <div className="enhanced-component" style={{ backgroundColor }}>
          <h1>{title}</h1>
          <WrappedComponent {...props} />
          <p>Status: Active</p>
          <p>Last Updated: {new Date().toLocaleString()}</p>
        </div>
      )
  }
}


