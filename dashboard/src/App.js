import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import { Link } from "react-router-dom";
import { Table } from './components/Tables';
function App() {
  return (
    <>

      <BrowserRouter>
      <Link to='/login' >login</Link>
      <Link to='/Table' >table</Link>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Table" element={<Table />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
