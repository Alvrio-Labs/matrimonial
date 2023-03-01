import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import authService from './components/authService';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };


  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
