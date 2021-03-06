import axios from 'axios'


const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://siyas-pcparts-app.herokuapp.com/api'
        : 'http://localhost:3000/api'
})


export default api