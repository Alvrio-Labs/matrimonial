import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SideBar';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import CustomPaginationActionsTable from './components/Table';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <Sidebar />
    // </div>
      <div className="app">
                  {/* <Navbar setIsSidebar={setIsSidebar} /> */}

        {/* <Sidebar isSidebar={isSidebar} /> */}
        <main className="content">
          <Routes>
            <Route path="/" element={<CustomPaginationActionsTable />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            {/* <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} /> */}
          </Routes>
        </main>
      </div>

  );
}

export default App;
