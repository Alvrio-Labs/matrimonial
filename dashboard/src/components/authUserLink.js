import axios from "./api/baseUrl";
import authHeader from "./authHeaders";

const getAllUser = () => {
  return axios.get("users", {
    headers: {
      "Authorization": authHeader()
    }
  }
  );
};

const getSingleUser = ({ user }) => {
  return axios.get(`/${user.id}`,
    { headers: authHeader() }
  )
};

const addUser = () => {
  return axios.post('users', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader(),
    },
  });
};

const authUserLink = {
  getAllUser, addUser, getSingleUser
};

export default authUserLink;
