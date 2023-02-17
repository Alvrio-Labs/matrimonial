// import { useEffect, useState } from 'react';

// export function usePagination(count, apiCall) {
//   const [results, setResults] = useState([]);
//   const [page, setPage] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     console.log(`Fetching Data for Page: ${page}`);
//     setLoading(true);
//     apiCall(count, page)
//       .then(({ data }) => {
//         setResults(data.results);
//         setTotal(data.total);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => setLoading(false));
//   }, [page]);

//   const nextPage = () => {
//     setPage(page + 1);
//   };

//   const prevPage = () => {
//     setPage(page - 1);
//   };

//   const canNextPage = () => {
//     const currentPage = page + 1;
//     const lastPage = Math.ceil(total / count);
//     return currentPage !== lastPage;
//   };

//   const canPrevPage = () => {
//     return page !== 0;
//   };

//   return {
//     results,
//     total,
//     loading,
//     nextPage,
//     prevPage,
//     canNextPage,
//     canPrevPage,
//   };
// }

// import React from "react";

// export default function Pagination({
//   postsPerPage,
//   totalPosts,
//   paginate,
//   currentPage,
// }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className='py-2'>
//       <div>
//         <p className='text-sm text-gray-700'>
//           Showing
//           <span className='font-medium'>
//             {" "}
//             {currentPage * postsPerPage - 10}{" "}
//           </span>
//           to
//           <span className='font-medium'> {currentPage * postsPerPage} </span>
//           of
//           <span className='font-medium'> {totalPosts} </span>
//           results
//         </p>
//       </div>
//       <nav className='block'>
//         <ul className='flex pl-0 rounded list-none flex-wrap'>
//           <li>
//             {pageNumbers.map((number) => (
//               <a
//                 onClick={() => {
//                   paginate(number);
//                 }}
//                 href='#'
//                 className={
//                   currentPage === number
//                     ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//                     : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//                 }
//               >
//                 {number}
//               </a>
//             ))}
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'>
            {" "}
            {currentPage * postsPerPage - 10}{" "}
          </span>
          to
          <span className='font-medium'> {currentPage * postsPerPage} </span>
          of
          <span className='font-medium'> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  paginate(number);
                }}
                href='#'
                className={
                  currentPage === number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}