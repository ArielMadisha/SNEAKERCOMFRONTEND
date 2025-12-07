import axios from "axios";

const API = axios.create({baseUrl: "http://localhost:3000"})

//Attach the token if exists
API.intercepters.request.use((req) => {
    const token = localStorage.getItem('token')
    if (token) req.headers.Authorization = token;
    return req
})


// Auth ---
export const loginUser = (data) => API.post('/users/login', data)
export const signupUser = (data) => API.post('/users/signup', data)

// Products ---
export const getProducts =() => API.get('/products')
export const getProductById = (id) => API.get(`/products/${id}`)

// Orders ---
export const createOrder = (data) => API.post('/orders', data)
export const getMyOrders = () => API.get('/orders')

// Reveiws ---
export const getProductReview = (pid) => API.get(`/review/${id}`)
