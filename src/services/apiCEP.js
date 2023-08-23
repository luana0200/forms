import axios from 'axios'

const apiCEP = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default apiCEP