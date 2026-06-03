import React from 'react'

export default function Product({product}) {
  return (
    <div className='product-card'>
      <h3>name: {product.name}</h3>
      <p>price: ${product.price.toFixed(2)}</p>
      <p>rating: ⭐{product.rating}</p>
    </div>
  )
}
