// import axios from "axios";
// import authHeader from "./authHeaders";

// const getAllUser = () => {
//   console.log(authHeader())
//   return axios.get("http://localhost:5000/api/admin/users",
//     { headers: authHeader() }
//   );
// };
// const addUser = () => {
//   return axios.post('http://localhost:5000/api/admin/users', {
//     headers: {
//       "Content-Type": "application/json",
//       headers: authHeader(),
//     },
//   });
// }
// const deleteUser = (id) => {
//   return axios.delete(`http://localhost:5000/api/admin/users/${id}`, { headers: authHeader() })
// }
// const editUser = (id) => {
//   return axios.delete(`http://localhost:5000/api/admin/users/${id}`, { headers: authHeader() })

// }
// const authUserLink = {
//   getAllUser, addUser, deleteUser, editUser
// };

// export default authUserLink;


import axios from "axios";
import authHeader from "./authHeaders";

const getAllUser = () => {
  console.log(authHeader())
  return axios.get("http://localhost:5000/api/admin/users", { headers: authHeader() });
};
const addUser = () => {
  return axios.post('http://localhost:5000/api/admin/users', {
    headers: {
      "Content-Type": "application/json",
      headers: authHeader(),
    },
  });
}
const authUserLink = {
  getAllUser, addUser
};

export default authUserLink;
