import axios from "axios";

const url = "http://localhost:4000/categories";


export async function getCategories()
{
    return axios.get(url)
    .then((response) => response.data)
    .catch((error) => 
        {
            console.log(error);
            throw error;
        });
}