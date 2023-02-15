import { Outlet } from "react-router-dom";
import FooterWebsite from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return <>
    <Navbar />
    <Outlet />

  </>;
};

export default Layout;