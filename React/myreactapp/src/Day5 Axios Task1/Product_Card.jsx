import React from 'react'

export default function Product_Card({ product, index, onDelete, onEdit }) {

  return (
    <div className = 'product-card' key={index+1}>
                <div className='img-card'>
                <img className='product-img' src={product.image}/>
                </div>
                <div className='product-title'>
                <h5>{product.title}</h5>
                </div>
                <div className='product-category'>
                <p>{product.category}</p>
                </div>
                <div className='price-rating'>
                <p id='price'>${product.price}</p>
                <p id='rating'>{product.rating.rate}⭐({product.rating.count})</p>
                </div>
                <div className='product-buttons'>
                <button className='btn btn-success' onClick={() => onEdit(product)}>Edit</button>
                <button className='btn btn-danger' onClick={() => onDelete(product.id)}>Delete</button>
                </div>
            </div>
  )
}
