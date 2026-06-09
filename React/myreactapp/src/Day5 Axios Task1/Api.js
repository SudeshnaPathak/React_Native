import axios from 'axios';

const url = 'http://localhost:4000/products';

export async function fetchProductsApi()
{
    return axios.get(url)
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error;
    });
}

export async function addProductApi(product)
{
    return axios.post(url, product)
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error;
    });
}

export async function editProductApi(id, updatedProduct)
{
    return axios.patch(`${url}/${id}`, updatedProduct)
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error;
    });
}

export async function deleteProductApi(id)
{
    return axios.delete(`${url}/${id}`)
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error;
    });
}