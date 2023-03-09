export default function authHeader() {
  const token = localStorage.getItem("authtoken");
  if (token) {
    // return { Authorization: `Bearer ${token}` };
    return  `Bearer ${token}`;

  } else {
    return {};
  }
}