import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import authService from './components/authService';
import Table from './components/User/Table';

function App() {
  const [currentUser, setCurrentUser] = useState();

  // useEffect(() => {
  //   const user = authService.getCurrentUser();
  //   console.log(user)
  //   if (user) {
  //     setCurrentUser(user);
  //     // localStorage.setItem('itemName', value)
  //     // localStorage.getItem(user)
  //   }
  // }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('auth') || false
  );


  useEffect(() => {
    localStorage.setItem("auth", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login"
            element={isAuthenticated ? <Table /> : <Login />} /> */}
          <Route path="/table" element={<Table />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
