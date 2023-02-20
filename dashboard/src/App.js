import './App.css';
import 'primereact/resources/primereact.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import FooterWebsite from './components/Footer';
import HomePage from './components/Home';
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
          <Route path="/Table" element={<Primedata />}></Route>
        </Routes>
        <FooterWebsite />
      </BrowserRouter>
    </>
  );
}

export default App;
