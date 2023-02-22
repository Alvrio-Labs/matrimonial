import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SideBar';
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import CustomPaginationActionsTable from './components/Table';
import Footer from './components/Footer';
import Dashboard from './components/DashBoard';
import AddUser from './components/AddUser';
import Form from './components/Form';
import Layout from './components/Layout';
import SideBar from './components/SideBar';
import StickyHeadTable from './components/T1';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      {/* <Layout /> */}
      {/* <SideBar /> */}
      <Routes>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path="/table" element={<StickyHeadTable />} />
        <Route path="/login" element={<Form />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<AddUser />} />

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
      {/* <Sidebar /> */}
    </>
  );
}

export default App;
