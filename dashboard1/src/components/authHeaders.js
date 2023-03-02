export default function authHeader() {
  const token = localStorage.getItem("authtoken");
  console.log(token)
  if (token) {
    console.log("token")
    return { Authorization: `Bearer ${token}` };
  } else {
    console.log("no token")
    return {};
  }
}