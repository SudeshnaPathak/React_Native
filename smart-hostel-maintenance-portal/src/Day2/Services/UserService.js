import axios from "axios";

const url = "http://localhost:4000/users";

export async function getUsers() 
{
    return axios.get(url)
    .then((response) => response.data)
    .catch((error) => 
        {
            console.error(error);
            throw error;
        });
}

export async function getUsersByEmailAndPassword(email, password)
{
    return axios.get(`${url}?email=${email}&password=${password}`)
    .then((response) => response.data)
    .catch((error) => 
        {
            console.log(error);
            throw error;
        });
}

