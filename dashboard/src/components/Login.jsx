// import React, { useState } from 'react'
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [msg, setMsg] = useState('');

//     const Auth = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/login', {
//                 email: email,
//                 password: password
//             });
//         } catch (error) {
//             if (error.response) {
//                 setMsg(error.response.data.msg);
//             }
//         }
//     }
//   return (
//     <div>

//     </div>
//   )
// }

// export default Login

// import React from 'react';
// import { useNavigate } from "react-router-dom";

// export default function Login() {

//     let navigate = useNavigate();
//     const routeChange = () => {
//         let path = `/Table`;
//         navigate(path);
//     }
//     return (
// <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//     <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
//         <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
//             Sign in
//         </h1>
//         <form className="mt-6">
//             <div className="mb-2">
//                 <label
//                     for="email"
//                     className="block text-sm font-semibold text-gray-800"
//                 >
//                     Email
//                 </label>
//                 <input
//                     type="email"
//                     className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 />
//             </div>
//             <div className="mb-2">
//                 <label
//                     for="password"
//                     className="block text-sm font-semibold text-gray-800"
//                 >
//                     Password
//                 </label>
//                 <input
//                     type="password"
//                     className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 />
//             </div>
//             <a
//                 href="#"
//                 className="text-xs text-purple-600 hover:underline"
//             >
//                 Forget Password?
//             </a>
//             <div className="mt-6">
//                 <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={routeChange}>
//                     Login
//                 </button>
//             </div>
//         </form>

//         <p className="mt-8 text-xs font-light text-center text-gray-700">
//             {" "}
//             Don't have an account?{" "}
//             <a
//                 href="#"
//                 className="font-medium text-purple-600 hover:underline"
//             >
//                 Sign up
//             </a>
//         </p>
//     </div>
// </div>
//     );
// }

import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api//login', {
                email: email,
                password: password
            });
            let path = `/Table`;
            navigate(path);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        // <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        //     <div className="hero-body">
        //         <div className="container">
        //             <div className="columns is-centered">
        //                 <div className="column is-4-desktop">
        //                     <form onSubmit={Auth} className="box">
        //                         <p className="has-text-centered">{msg}</p>
        //                         <div className="field mt-5">
        //                             <label className="label">Email or Username</label>
        //                             <div className="controls">
        //                                 <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Password</label>
        //                             <div className="controls">
        //                                 <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <button className="button is-success is-fullwidth">Login</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                        Sign in
                    </h1>
                    <form className="mt-6" onSubmit={Auth}>
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div></>
    )
}

export default Login