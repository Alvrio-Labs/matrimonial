// import './App.css';
// import 'primereact/resources/primereact.css';

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout';
// import Login from './components/Login';
// import FooterWebsite from './components/Footer';
// import HomePage from './components/Home';
// import { Primedata } from './components/Primedata';
// import { useState } from 'react';
// function App() {
//   const [isLoggedIn, setisLoggedIn] = useState(null);
//   const logIn = () => {
//     setisLoggedIn(true);
//   };
//   const logOut = () => {
//     setisLoggedIn(false);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Layout />
//         {/* {isLoggedIn ? (
//         <button onClick={logOut}>Logout</button>
//       ) : (
//         <button onClick={logIn}>Login</button>
//       )} */}
//         <Routes>
//           <Route path="/" element={<Layout />} />
//           <Route index element={<HomePage />} />
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/Table" element={<Primedata />}></Route>
//         </Routes>
//         <FooterWebsite />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


import './App.css';
import 'primereact/resources/primereact.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import FooterWebsite from './components/Footer';
import HomePage from './components/Home';
import { Primedata } from './components/Primedata';
import { useState } from 'react';
import SideBar from './components/SideBar';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        <Layout />
        {/* {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )} */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Table" element={<Primedata />}></Route>
        </Routes>
        <FooterWebsite />
      </BrowserRouter>
    </>
  );
}

export default App;
