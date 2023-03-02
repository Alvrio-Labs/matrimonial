import axios from "axios";
import authHeader from "./authHeaders";

const getAllUser = () => {
  console.log(authHeader())
  return axios.get("http://localhost:5000/api/admin/users", { headers: authHeader() });
};

const authUserLink = {
  getAllUser,
};

export default authUserLink;