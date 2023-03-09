import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Home from './components/Home';
import Login from './components/login';
import authService from './components/authService';
import Table from './components/User/Table';
import Form from "./components/User/addUser";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('auth') || false
  );


  useEffect(() => {
    localStorage.setItem("auth", isAuthenticated);
  }, [isAuthenticated]);

  const SidebarLayout = () => (
    <>
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
        </main>
      </div>
      <Outlet />
    </>
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/login"
            element={isAuthenticated ? <Table /> : <Login />} /> */}
              <Route path="/table" element={<Table />} />
              <Route path="/home" element={<Home />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
