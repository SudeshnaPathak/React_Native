import React from 'react'
import Product_Card from './Product_Card';
import ProductForm from './ProductForm';
import {fetchProductsApi, addProductApi, editProductApi, deleteProductApi} from './Api';

export default function Products() {
    const [products, setProducts] = React.useState([]);
    const [editingProduct, setEditingProduct] = React.useState(null);
    const [addingProduct, setAddingProduct] = React.useState(null);
    const [productCart, setProductCart] = React.useState([]);
    const [filterproducts, setFilterProducts] = React.useState([]);

    const newProductTemplate = {
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: { rate: 0, count: 0 }
    };

    function fetchProducts()
    {
        fetchProductsApi()
        .then(data => {
            setProducts(data);
            setFilterProducts(data);
        })
        .catch(error => console.error(error));
    }

    React.useEffect(() => {
        fetchProducts()
    }, []);

    function searchProducts(query)
    {
        const filtered = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        setFilterProducts(filtered);
    }

    function addProduct()
    {
        setAddingProduct(newProductTemplate);
    }

    function editProduct(product)
    {
        setEditingProduct(product);
    }


    function handleEditSubmit(updatedProduct)
    {
        editProductApi(editingProduct.id, updatedProduct)
        .then(data => {
            setProducts(products.map(product => product.id === editingProduct.id ? data : product));
            setEditingProduct(null);
        })
        .catch(error => console.error(error));
    }

    function handleAddSubmit(newProduct)
    {
        addProductApi(newProduct)
        .then(data => {
            setProducts([...products, data]);
            setAddingProduct(null);
        })
        .catch(error => console.error(error));
    }

    function handleAddToCart(productId)
    {
        setProductCart(productCart => !productCart.includes(productId) ? [...productCart, productId] : productCart);
    }

    function deleteProduct(id)
    {
        deleteProductApi(id)
        .then(() => {
            setProducts(products.filter(product => product.id !== id));
        })
        .catch(error => console.error(error));
    }

    
  return (
    <>
    <div className='search-bar'>
        <input 
        type="text"
        className='form-control'
        placeholder='Search products...'
        onChange={(e) => searchProducts(e.target.value)} />
    </div>

    <div className='top-bar'>
        <button className='btn btn-primary' onClick={addProduct}>+ Add Product</button>
        <p className='cart-count'>Cart Count: {productCart.length}</p>
    </div>

    {editingProduct && 
        <ProductForm
        product={editingProduct} 
        onSubmit={handleEditSubmit} 
        onCancel={() => setEditingProduct(null)} />
    }

    {addingProduct &&
        <ProductForm
        product={newProductTemplate} 
        onSubmit={handleAddSubmit} 
        onCancel={() => setAddingProduct(null)} />
    }

    <div className='product-container'>
        {filterproducts.map((product, index) => ( <Product_Card 
        key={index} 
        product={product} 
        index={index}
        onDelete={deleteProduct} 
        onEdit={editProduct}
        updateCart={handleAddToCart}
        />))}
    </div>
    </>
  )
}
