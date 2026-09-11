import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: 'd9b51348070943db0c50dbc41f77781b',
        language: 'pt-BR',
        page: 1
    }
})

export default api;