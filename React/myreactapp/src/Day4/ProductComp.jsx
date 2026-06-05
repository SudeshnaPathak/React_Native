import React from 'react'

export default function ProductComp() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Mobile", price: 20000, inStock: false },
    { id: 3, name: "Headphones", price: 3000, inStock: true }
];
  return (
    <div className='product-container'>
      {
        products.map((product) => {
            return (
                <div key={product.id} className='product'>
                <h3>{product.name}</h3>
                <p className='price'>${product.price}</p>
                {product.inStock ? <button>Buy Now</button> : <p className='stock-out'>Out of Stock</p>}
                </div>
            )
        })
      }
    </div>
  )
}
