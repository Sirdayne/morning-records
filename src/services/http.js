import axios from 'axios'

const BASE_URL = 'http://localhost:3012'
const TIMEOUT = 5 * 60 * 1000

let api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api