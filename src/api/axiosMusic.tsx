
import axios from 'axios'
axios.defaults.withCredentials =  true

const axiosInstanciaMusic = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    
}) 

export default axiosInstanciaMusic