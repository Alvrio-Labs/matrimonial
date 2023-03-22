
import axios from "axios";

const login = async (email, password) => {
  return await axios
    .post("http://localhost:5000/api/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data.token)
      localStorage.setItem("authtoken", response.data.token);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("authtoken");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("authtoken"));
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;