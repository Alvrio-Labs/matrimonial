//  import React from 'react'
// import { useState, useEffect } from 'react'
// import Axios from 'axios'

// export const Table = () => {

//   const [users, setUsers] = useState([]);
//   const deleteUser = async (id) => {
//     try {
//       const deleteUser = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
//         method: "DELETE"
//       });
//       setUsers(users.filter(todo => todo.id !== id));
//     } catch (error) {
//       console.log(error.message)
//     }
//   }

//   useEffect(() => {
//     async function fetchData() {
//       const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
//       setUsers(reqData.data.users)
//     }
//     fetchData();
//   }, [users]);

//   const columns = [
//     {
//       id: '1',
//       name: 'id ',
//     },
//     {
//       id: '2',
//       name: 'First Name',
//     },
//     {
//       id: '3',
//       name: 'Last Name',
//     },
//     {
//       id: '4',
//       name: 'Email',
//     },
//     {
//       id: '5',
//       name: 'PHONE',
//     },
//     {
//       id: '6',
//       name: 'GENDER',
//     },
//     {
//       id: '7',
//       name: 'DATE OF BIRTH	',
//     },
//   ]
//   return (
//     <div>
//       <div className="flex flex-col">
//         <div className="overflow-x-auto">
//           <div className="p-1.5 w-full inline-block align-middle">
//             <div className="overflow-hidden border rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       ID
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       First Name
//                     </th>

//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Last Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Phone
//                     </th>

//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Gender
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                       Date Of Birth
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                     >
//                       Edit
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
//                     >
//                       Delete
//                     </th>
//                   </tr>
//                 </thead>
//                 <thead className=''>
//                   <tr>
//                     {columns.map((title) => (
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
//                     >
//                         {title.name}
//                       </th>
//                     )
//                     )}
//                   </tr>

//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {users.map((user) => (
//                     <>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div key={user.id} className="user">{user.id}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.first_name}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div>{user.last_name}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.email}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.phone}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.gender}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                         <div >{user.date_of_birth}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
//                         <a
//                           className="text-green-500 hover:text-green-700"
//                           href="#"
//                         >
//                           Edit
//                         </a>
//                       </td>
//                       <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
//                         <button
//                           className="text-red-500 hover:text-red-700"
//                           href="#" onClick={() => deleteUser(user.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </>
//                   ))}

//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { useState } from "react"

// export const Table = () => {
//   let [num, setNum] = useState(1)
//   let [cur, setCur] = useState(1)

//   const pages = [
//     { page: num },
//     { page: num + 1 },
//     { page: num + 2 },
//     { page: num + 3 },
//   ]
//   function Next() {
//     setNum(++num)
//   }
//   function back() {
//     num > 1 && setNum(--num)
//   }
//   return (
//     <>      <div className="flex bg-white rounded-lg font-[Poppins]">
//       <button onClick={back} className="h-12 border-2 border-r-0 border-indigo-600
//                px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white">
//         <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
//         </svg>
//       </button>
//       {
//         pages.map((pg, i) => (
//           <button key={i} onClick={() => setCur(pg.page)} className={`h-12 border-2 border-r-0 border-indigo-600
//                w-12 ${cur === pg.page && 'bg-indigo-600 text-white'}`}>{pg.page}</button>
//         ))
//       }
//       <button onClick={Next} className="h-12 border-2  border-indigo-600
//                px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white">
//         <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
//       </button>
//     </div>
//     </>

//   )
// }



import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export const Table = () => {

  const [users, setUsers] = useState([]);
  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: "DELETE"
      });
      setUsers(users.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const reqData = await Axios.get("http://localhost:5000/api/admin/users?page=0")
      setUsers(reqData.data.users)
    }
    fetchData();
  }, [users]);

  const columns = [
    {
      id: '1',
      name: 'id ',
    },
    {
      id: '2',
      name: 'First Name',
    },
    {
      id: '3',
      name: 'Last Name',
    },
    {
      id: '4',
      name: 'Email',
    },
    {
      id: '5',
      name: 'PHONE',
    },
    {
      id: '6',
      name: 'GENDER',
    },
    {
      id: '7',
      name: 'DATE OF BIRTH	',
    },
  ]
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      First Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Phone
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Date Of Birth
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* {posts.map((user) => (
                    <>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div key={user.id} className="user">{user.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div >{user.first_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div>{user.last_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div >{user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div >{user.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div >{user.gender}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div >{user.date_of_birth}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          className="text-green-500 hover:text-green-700"
                          href="#"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          className="text-red-500 hover:text-red-700"
                          // href="#" onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  ))} */}
                  {
                    users.map((user) => (
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.id}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.first_name}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.last_name}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.phone}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.gender}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.date_of_birth}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.first_name}</td>

                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{user.first_name}</td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

