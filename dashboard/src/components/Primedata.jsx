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

      {/* <DataTable value={users} paginator rows={5} >

        <Column field="id" header="id"></Column>
        <Column header="First Name" field="first_name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable> */}

      <div className=''>
        <table>
        <DataTable value={users} paginator rows={5}>
                    <Column header="ID" field="id" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      
                    </Column>
                    <Column header="First Name" field="first_name" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column>
                    <Column header="Last Name" field="last_name" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column>
                    <Column header="Email" field="email" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column>
                    <Column header="Gender" field="gender" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column>
                    <Column header="Date of Birth" field="date_of_birth" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column>
                    <Column header="Mobile" field="phone" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column>
                    <Column header="Edit" field="first_name" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column>
                    <Column header="Delete">
                      <button className='text-red'>a</button>
                    </Column>




                </DataTable>
        </table>
      </div>
    </div>
  )
}

