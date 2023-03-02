import { Outlet } from 'react-router-dom';
import Sidebar from '../scenes/global/Sidebar';

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);
export default SidebarLayout