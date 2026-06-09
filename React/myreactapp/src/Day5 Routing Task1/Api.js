import axios from 'axios';

const url = ' http://localhost:4000/wildlifeRescues';

export async function fetchRescueCasesApi() 
{
     return axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export async function fetchRescueCaseByIdApi(id) {
    return axios.get(`${url}/${id}`)
   .then((response) => response.data)
   .catch((error) => {
     console.error(error);  
     throw error;
   });
}