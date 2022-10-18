import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://smart-port-city-fullstack.herokuapp.com/",
});
