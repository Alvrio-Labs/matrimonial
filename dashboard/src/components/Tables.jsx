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
                  {users.map((user) => (
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
                        href="#" onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                    </>
                  ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


