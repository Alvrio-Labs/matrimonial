export default function authHeader() {
  const token = localStorage.getItem("authtoken");
  console.log(token)
  if (token) {
    return { Authorization: `Bearer ${token}` };
    // return  `Bearer ${token}`;

  } else {
    return {};
  }
}