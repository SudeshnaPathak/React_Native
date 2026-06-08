import React from 'react'
import axios from 'axios'
import Product_Card from './Product_Card';
import EditForm from './EditForm';

export default function Products() {
    const [products, setProducts] = React.useState([]);
    const [editingProduct, setEditingProduct] = React.useState(null);

    function fetchProducts()
    {
        axios.get('http://localhost:4000/products')
        .then(response => {
            console.log(response.data);
            setProducts(response.data);
        })
        .catch(error => console.error(error));
    }

    React.useEffect(() => {
        fetchProducts()
    }, []);

    function addProduct()
    {
        const newProduct = 
           {
            "title": "Women's Casual Slim Fit",
            "price": 67.88,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
            "rating": {
            "rate": 2.1,
            "count": 430
            }
            };
        axios.post('http://localhost:4000/products', newProduct)
        .then(response => {
            console.log(response.data);
            setProducts([...products, response.data]);
        })
        .catch(error => console.error(error));
    }

    function editProduct(product)
    {
        setEditingProduct(product);
    }

    function handleEditChange(e)
    {
        const { name, value } = e.target;
        setEditingProduct({ ...editingProduct, [name]: value });
    }

    function handleEditSubmit(e)
    {
        e.preventDefault();
        axios.patch(`http://localhost:4000/products/${editingProduct.id}`, editingProduct)
        .then(response => {
            console.log(response.data);
            setProducts(products.map(product => product.id === editingProduct.id ? response.data : product));
            setEditingProduct(null);
        }
        ).catch(error => console.error(error));
    }

    function deleteProduct(id)
    {
        axios.delete(`http://localhost:4000/products/${id}`)
        .then(response => {
            console.log(response.data);
            setProducts(products.filter(product => product.id !== id));
        })
        .catch(error => console.error(error));
    }

    
  return (
    <>
    <div className='top-bar'>
        <button className='btn btn-primary' onClick={addProduct}>+ Add Product</button>
    </div>

    {editingProduct && 
        <EditForm 
        product={editingProduct} 
        onChange={handleEditChange} 
        onSubmit={handleEditSubmit} 
        onCancel={() => setEditingProduct(null)} />
    }

    <div className='product-container'>
        {products.map((product, index) => ( <Product_Card 
        key={index} 
        product={product} 
        index={index}
        onDelete={deleteProduct} 
        onEdit={editProduct}
        />))}
    </div>
    </>
  )
}
