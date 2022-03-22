import axios from "axios"

export default class ProductsDetailsAPI {
  getProducts = (page?: number, size?: number) => {
    return axios.get(`http://localhost:1234/products?page=${page}&size=${size}`);
  }
}
