import { Outlet } from "react-router-dom";
// import FooterWebsite from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Layout = () => {
  return <>
    <SideBar />
    <Outlet />

  </>;
};

export default Layout;