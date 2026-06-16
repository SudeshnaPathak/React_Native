import React from 'react'
import Searchbar from './Searchbar'

export default function App() {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];
    const [searchTerm, setSearchTerm] = React.useState('');
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  return (
    <div>
      <Searchbar onSearch={setSearchTerm} />
      {
        filteredProducts.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
            </div>
        ))
      }
    </div>
  )
}
