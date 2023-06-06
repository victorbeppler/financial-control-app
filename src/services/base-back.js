import axios from "axios";

const ApiBack = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default ApiBack;
//http://localhost:3000/api/environment/13
