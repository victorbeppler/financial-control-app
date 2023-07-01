import axios from "axios";

const ApiBack = axios.create({
  baseURL: "https://back.expense.victorbeppler.dev/api",
});

export default ApiBack;
//http://localhost:3000/api/environment/13
