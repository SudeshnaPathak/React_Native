import React from 'react'

export default function ProductForm({ product, onSubmit , onCancel}) {

  const[editProduct, setEditProduct] = React.useState({...product});

  function handleChange(e)
    {
        const { name, value } = e.target;
        setEditProduct({ ...editProduct, [name]: value });
    }

   function handleSubmit(e)
   {
    e.preventDefault(); 
    const productTosave = {
        ...editProduct,
        price: parseFloat(editProduct.price)
     };
     onSubmit(productTosave);
    }

  return (
    <div className='container d-flex justify-content-center align-items-start mt-4'>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name='title' value={editProduct.title} onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" name='price' value={editProduct.price} onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" name='description' value={editProduct.description} onChange={handleChange}></textarea>
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <input type="text" class="form-control" id="category" name='category' value={editProduct.category} onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image URL</label>
                <input type="text" class="form-control" id="image" name='image' value={editProduct.image} onChange={handleChange}/>
            </div>
            <button type="submit" class="btn btn-success" style={{margin: '20px'}}>Save</button>
            <button type="button" class="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </form>
      
    </div>
  )
}

