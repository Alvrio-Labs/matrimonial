// import { useState } from "react";
// import { Routes, Route, Outlet } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Tables from "./scenes/Tables";
// import Form from "./scenes/form";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Homepage from "./components/Homepage";
// import Login from "./components/Login";
// import Views from "./scenes/views";
// import EditForm from "./scenes/form/EditForm";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const SidebarLayout = () => (
//     <>
//       {/* <Sidebar isSidebar={isSidebar}/> */}
//       <div className="app">
//         <Sidebar isSidebar={isSidebar} />
//         <main className="content">
//           <Topbar setIsSidebar={setIsSidebar} />
//         </main>
//       </div>
//       <Outlet />
//     </>
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />

//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/users" element={<Tables />} />
//               <Route path="/form" element={<Form />} />
//               <Route path='/views/:id' element={<Views />} />
//               <Route path='/edit/:id' element={<EditForm />} />

//             </Routes>
//           </main>
//         </div>

//         {/* <div className="app">
//           <Routes>
//             <Route path="/" element={<Homepage />} />
//             <Route element={<SidebarLayout />}>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/form" element={<Form />} />
//             </Route>

//           </Routes>
//         </div> */}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;



import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Tables from "./scenes/Tables";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Views from "./scenes/views";
import EditForm from "./scenes/form/EditForm";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const SidebarLayout = () => (
    <>
      {/* <Sidebar isSidebar={isSidebar} /> */}
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
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route element={<SidebarLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/users" element={<Tables />} />
              </Route>
              <Route path="/" element={<Login />} />
              <Route path="/form" element={<Form />} />
              <Route path='/views/:id' element={<Views />} />
              <Route path='/edit/:id' element={<EditForm />} />

            </Routes>
          </main>
        </div>

        {/* <div className="app">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route element={<SidebarLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
            </Route>

          </Routes>
        </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
