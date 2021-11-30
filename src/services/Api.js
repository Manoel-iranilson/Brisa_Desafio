import axios from "axios";
const axiosCliente = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
export default axiosCliente;
