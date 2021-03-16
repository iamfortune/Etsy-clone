import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  Headers: { Accept: 'application/json' },
  timeout: 10000
})

export default {
  getProducts () {
    return axiosInstance.get('/products')
  },
  getProduct (id) {
    return axiosInstance.get('/products/' + id)
  },
  postProduct(product) {
    return axiosInstance.post('/products', product)
  }
}
