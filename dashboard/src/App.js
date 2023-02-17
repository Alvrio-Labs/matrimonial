import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import { Link } from "react-router-dom";
import { Table } from './components/Tables';
import FooterWebsite from './components/Footer';
import HomePage from './components/Home';
function App() {
  return (
    <>

      <BrowserRouter>
      
        <Layout />
        <Routes>
        <Route path="/" element={<Layout />} />
            <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Table" element={<Table />}></Route>
        </Routes>
        <FooterWebsite/>
      </BrowserRouter>
    </>
  );
}

export default App;
