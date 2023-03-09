import axios from "axios";
import authHeader from "./authHeaders";

const getAllUser = () => {
  return axios.get("http://localhost:5000/api/admin/users", {
    headers: {
      "Authorization": authHeader()
    }
  }
  );
};
const getSingleUser = ({ user }) => {
  return axios.get(`http://localhost:5000/api/admin/users/${user.id}`,
    { headers: authHeader() }
  )
}
const addUser = () => {
  return axios.post('http://localhost:5000/api/admin/users', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader(),
    },
  });
}
const authUserLink = {
  getAllUser, addUser, getSingleUser
};

export default authUserLink;
