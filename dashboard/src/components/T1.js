// import React, { useState, useEffect } from "react";
// import Posts from "./Post";
// import Pagination from "../hooks/usePagination";
// import axios from "axios";

// const TT = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   useEffect(() => {
//     async function fetchData() {
//       const reqData = await axios.get("http://localhost:5000/api/admin/users?page=0")
//       setUsers(reqData.data.users)
//     }
//     fetchData();
//   }, [users]); 

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   return (
//     <div>
//       <Posts posts={currentPosts} />
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={users.length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// export default TT;

import React, { useState, useEffect } from "react";
import Posts from "./Post";
import Pagination from "../hooks/usePagination";
import axios from "axios";

const TT = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);

  const [postsPerPage] = useState(2);
 
  useEffect(() => {
    async function fetchData() {
      const reqData = await axios.get(`http://localhost:5000/api/admin/users?page=${page}`)
      setUsers(reqData.data.users)
    }
    fetchData();
  }, [users]); 


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(indexOfLastPost)
  // console.log(indexOfFirstPost)
  // console.log(currentPosts)


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TT;
