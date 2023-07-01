import ApiBack from "../services/base-back.js";

async function checkAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    try {
      const response = await ApiBack.post(`/user/checktoken/${user.token}`);
      return response.status === 200;
    } catch (error) {
      localStorage.removeItem("user");
      return false;
    }
  }

  return false;
}

export default checkAuth;
