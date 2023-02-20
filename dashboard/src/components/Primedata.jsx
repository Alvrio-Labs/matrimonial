import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const Primedata = () => {


  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };
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
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteUser} />
    </React.Fragment>
  );
  return (
    <div>

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
            {/* <Column header="Edit" field="first_name" className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></Column> */}
            <Column header="Delete" Button>
              <button className='text-red'>a</button><Button />
              <Button label="Submit" />

            </Column>
            {/* <Button label="Submit" /> */}
            {/* <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}> */}
            {/* <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div> */}
            {/* </Dialog> */}




          </DataTable>
        </table>
      </div>
    </div>
  )
}

