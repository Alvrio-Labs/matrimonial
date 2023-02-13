import axios from 'axios';

export const users = (count, page) =>
  axios.get(`http://localhost:3001/api/admin/users?count=${count}&page=${page}`);
  // http://localhost:3000/api/admin/users?page=1