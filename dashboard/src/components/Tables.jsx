// export const Table = (props) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <td>ID #</td>
//           <td>First Name</td>
//           <td>Last Name</td>
//           <td>Email</td>
//           <td>phone</td>
//           <td>gender</td>
//           <td>Date Of Birth</td>

//         </tr>
//       </thead>
//       <tbody>
//         {props.results.map((result) => (
//           <tr key={result.id}>
//             <td>{result.id}</td>
//             <td>{result.first_name}</td>
//             <td>{result.last_name}</td>
//             <td>{result.email}</td>
//             <td>{result.phone}</td>
//             <td>{result.gender}</td>
//             <td>{result.date_of_birth}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Table = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchAllUsers = async () => {
  //     try {
  //     //   const response = await fetch('http://localhost:3001/api/admin/users' , {
  //     //   method:"GET",
  //     //   headers: { "Content-Type": "application/json"},

  //     // });
  //       // const res = await axios.get("  http://localhost:3001/api/admin/users?page=1");
        // const response = await fetch('http://localhost:3000/api/admin/users?page=0', {
        //   method: 'Get',
        //   mode: 'no-cors',       
        //   withCredentials: true,    
        //   crossorigin: true,    
    
        // }) 
  //       // const jsonData = await response.json()
  
  //       // setUsers(jsonData);
  
  //       setUsers(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllUsers();
  // }, []);


  const [todos , setTodos] = useState([]);
  // const getTodos = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/admin/users?page=0', {
  //       method: 'Get',
  //       mode: 'no-cors',       
  //       withCredentials: true,    
  //       crossorigin: true,    
  
  //     }) 
  //     const jsonData = await response.json()
  //     console.log('response' + response)
  //     setTodos(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  // useEffect(() => {
  //   getTodos()
  // })
  useEffect( ()=>{
    const getUserdata= async()=>{
        const reqData= await fetch("http://localhost:5000/api/admin/users?page=0");
        const resData= await reqData.json();
        setTodos(resData);
       // console.log(resData);
    }
    getUserdata();
},[]);
  console.log('todos' + todos);
  return (
    <div>
      <table>

        <thead>
          <tr>
            <td>ID #</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>phone</td>
            <td>gender</td>
            <td>Date Of Birth</td>

          </tr>
        </thead>
        <tbody>
          {/* {props.results.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.first_name}</td>
              <td>{result.last_name}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>
              <td>{result.gender}</td>
              <td>{result.date_of_birth}</td>
            </tr>
          ))} */}
          {todos.map((user) => (
          <div key={user.id} className="user">
            <img src={user.first_name} alt="" />
            <h2>{user.last_name}</h2>
            <p>{user.email}</p>
            <span>${user.gender}</span>
          </div>
        ))}
        </tbody>
      </table>
    </div>
  )
}


