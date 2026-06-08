import React from 'react'

export default function EditForm({ product , onChange, onSubmit , onCancel}) {
  return (
    <div className='container d-flex align-items-start mt-4'>
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name='title' value={product.title} onChange={onChange}/>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" name='price' value={product.price} onChange={onChange}/>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" name='description' value={product.description} onChange={onChange}></textarea>
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <input type="text" class="form-control" id="category" name='category' value={product.category} onChange={onChange}/>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image URL</label>
                <input type="text" class="form-control" id="image" name='image' value={product.image} onChange={onChange}/>
            </div>
            <button type="submit" class="btn btn-success" onClick={onSubmit} style={{margin: '20px'}}>Save</button>
            <button type="button" class="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </form>
      
    </div>
  )
}
