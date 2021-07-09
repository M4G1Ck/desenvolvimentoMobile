/* eslint-disable prettier/prettier */
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-zerocommerce.herokuapp.com/produto",

});

export default api;