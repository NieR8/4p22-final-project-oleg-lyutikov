import axios from 'axios'
import product from '../pages/Product/Product'

const url = 'https://dummyjson.com/products'

const fetchData = async () => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

const fetchSingleProduct = async (productId) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${productId}`)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

const api = { fetchData, fetchSingleProduct }
export default api
