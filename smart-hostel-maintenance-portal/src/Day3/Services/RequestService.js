import axios from "axios";

const url = "http://localhost:4000/requests";


export async function getRequests()
{
    return axios.get(url)
    .then((response) => response.data)
    .catch((error) => 
        {
            console.log(error);
            throw error;
        });
}

export async function getRequestById(id)
{
    return axios.get(`${url}/${id}`)
    .then((response) => response.data)
    .catch((error) => 
        {
            console.log(error);
            throw error;
        });
}

export async function getRequestsByStudentId(studentId)
{
    return axios.get(`${url}?studentId=${studentId}`)
    .then((response) => response.data)
    .catch((error) => 
        {
            console.log(error);
            throw error;
        });
}

export async function createRequest(requestData)
{
    return axios.post(url, requestData)
    .then((response) => response.data)
    .catch((error) => 
        {
            console.log(error);
            throw error;
        });
}

export async function updateRequest(id, requestData)
{
    return axios.patch(`${url}/${id}`, requestData)
    .then((response) => response.data)
    .catch((error) =>
        {
            console.log(error);
            throw error;
        }
    );
}

export async function deleteRequest(id)
{
    return axios.delete(`${url}/${id}`)
    .then((response) => response.data)
    .catch((error) =>
        {
            console.log(error);
            throw error;
        }
    );
}