import './App.css';
import 'primereact/resources/primereact.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import { Table } from './components/Tables';
import FooterWebsite from './components/Footer';
import HomePage from './components/Home';
import TT from './components/T1';
import { Primedata } from './components/Primedata';
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
          <Route path="/Tables" element={<TT />}></Route>
          <Route path="/Tabless" element={<Primedata />}></Route>

        </Routes>
        <FooterWebsite/>
      </BrowserRouter>
    </>
  );
}

export default App;
