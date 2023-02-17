import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const Primedata = () => {

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
      const reqData = await Axios.get(`http://localhost:5000/api/admin/users`)
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

      {/* <DataTable value={users}> */}
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
                {/* <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  <div >
                    <DataTable value={users} paginator rows={5} >

                      <Column field="id" header="id"></Column>
                      <Column header="First Name" field="first_name"></Column>
                      <Column field="category" header="Category"></Column>
                      <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  <div >
                    <DataTable value={users} paginator rows={5} >

                      <Column header="First Name" field="first_name"></Column>
                      <Column field="category" header="Category"></Column>
                      <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                  </div>
                </td> */}

                <div ></div>


                <DataTable value={users} paginator rows={5} >
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    <Column header="First Name" field="first_name"></Column>

                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    <Column header="First Name" field="last_name"></Column>

                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    <Column header="First Name" field="first_name"></Column>

                    </td>

                    <Column header="First Name" field="first_name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                  </DataTable>
                
                {/* <DataTable value={users} paginator rows={5} >

                  <Column field="id" header="id"></Column>
                  <Column header="First Name" field="first_name"></Column>
                  <Column field="category" header="Category"></Column>
                  <Column field="quantity" header="Quantity"></Column>
                </DataTable> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <DataTable value={users} paginator rows={5} >

        <Column field="id" header="id"></Column>
        <Column header="First Name" field="first_name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable> */}
    </div>
  )
}

