import React from 'react'
import Product from './Product'
import './App.css'

export default function App() {

  const products = [{
    name: "Laptop",
    price: 999.99,
    rating: 4.5
  }, {
    name: "Smartphone",
    price: 499.99,
    rating: 4.2
  }, {
    name: "Headphones",
    price: 199.99,
    rating: 4.0
  },{
    name: "Smartwatch",
    price: 299.99,
    rating: 4.3
  }];

  return (
    <div className='app'>
      {
        products.map((product , key) => (<Product product={product} />))
      }
    </div>
  )
}
