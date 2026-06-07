import React from 'react'
import axios from 'axios'

export default function Products() {
    const [products, setProducts] = React.useState([]);

    function fetchProducts()
    {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            console.log(response.data);
            setProducts(response.data);
        })
        .catch(error => console.error(error));
    }

    React.useEffect(() => {
        fetchProducts()
    }, []);

  return (
    <>
    <div className='top-bar'>
        <button className='btn btn-primary'>+ Add Product</button>
    </div>
    <div className='product-container'>
        {products.map((product, index) => (
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
                <button className='btn btn-success' >Edit</button>
                <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
            
        ))}
    </div>
    </>
  )
}
