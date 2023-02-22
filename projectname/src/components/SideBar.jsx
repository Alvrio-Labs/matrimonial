// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// // import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         // color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const Sidebar = () => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           // background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h3"
//                 >
//                   Admin
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box mb="25px">
//               <Box display="flex" justifyContent="center" alignItems="center">

//               </Box>

//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               User Data
//             </Typography>
//             <Item
//               title="Manage Users"
//               to="/Table"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Pages
//             </Typography>
//             <Item
//               title="Add User"
//               to="/form"
//               icon={<PersonOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Add User"
//               to="/form"
//               icon={<PersonOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             /><Item
//             title="Add User"
//             to="/form"
//             icon={<PersonOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Sidebar;


// import React from "react";
// import clsx from "clsx";
// import {
//   Drawer,
//   AppBar,
//   Toolbar,
//   Typography,
//   Divider,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse
// } from "@material-ui/core";
// import { withRouter } from "react-router-dom";
// import useStyles from "./styles";
// //icons import
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
// import AnnouncementIcon from "@material-ui/icons/Announcement";
// import TimelineIcon from "@material-ui/icons/Timeline";
// import SubjectIcon from "@material-ui/icons/Subject";
// import CloseIcon from "@material-ui/icons/Close";
// import DashboardIcon from "@material-ui/icons/Dashboard";

// const SideBar = (props) => {
//   const { open } = props;
//   const classes = useStyles();
//   const { history } = props;
//   const [item, setItem] = React.useState({});
//   const handleOpen = (name) => {
//     setItem({ [name]: !item[name] });
//   };
//   const Menu = [
//     {
//       name: "Dashboard",
//       icon: <DashboardIcon />,
//       onClick: null
//     },
//     {
//       name: "Freelancer",
//       icon: <DashboardIcon />,
//       onClick: null
//     },
//     {
//       name: "Clients",
//       icon: <DashboardIcon />,
//       onClick: null
//     },
//     {
//       name: "Organizations",
//       icon: <DashboardIcon />,
//       onClick: null
//     },
//     {
//       name: "Insights",
//       icon: <DashboardIcon />,
//       onClick: null
//     }
//   ];
//   return (
//     <>
//       <Drawer
//         variant="permanent"
//         // className={clsx(classes.drawer, {
//         //   [classes.drawerOpen]: open,
//         //   [classes.drawerClose]: !open
//         // })}
//         // classes={{
//         //   paper: clsx({
//         //     [classes.drawerOpen]: open,
//         //     [classes.drawerClose]: !open
//         //   })
//         // }}
//       >
//         <Divider />
//         <div className={` sidebar`}>
//           <div className="logo ">
//             <IconButton className=" text-light" onClick={props.close}>
//               <CloseIcon />
//             </IconButton>
//           </div>
//           <Divider />
//           <List className="text-light">
//             {Menu.map((navItem) => {
//               const { name, icon, subMenu, onClick } = navItem;
//               return (
//                 <div key={name}>
//                   {subMenu ? (
//                     <>
//                       <ListItem
//                         key={name}
//                         button
//                         onClick={() => handleOpen(name)}
//                       >
//                         <ListItemIcon className="text-light">
//                           {icon}
//                         </ListItemIcon>
//                         <ListItemText primary={name} />
//                         {item[name] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
//                       </ListItem>
//                       <Collapse
//                         in={item[name]}
//                         unmountOnExit
//                         component="li"

//                       >
//                         <List
//                           className={`bg-white text-dark m-3 shadow rounded ${
//                             open ? "" : "d-none"
//                           }`}
//                           disablePadding
//                         >
//                           {subMenu.map((subItem) => {
//                             const { subItemText, subItemOnClick } = subItem;
//                             return (
//                               <ListItem
//                                 button
//                                 key={subItemText}
//                                 onClick={subItemOnClick}
//                               >
//                                 <ListItemText>{subItemText}</ListItemText>
//                               </ListItem>
//                             );
//                           })}
//                         </List>
//                       </Collapse>
//                     </>
//                   ) : (
//                     <ListItem button key={name} onClick={onClick}>
//                       <ListItemIcon className="text-light">{icon}</ListItemIcon>
//                       <ListItemText>{name}</ListItemText>
//                     </ListItem>
//                   )}
//                 </div>
//               );
//             })}
//           </List>
//         </div>
//       </Drawer>
//     </>
//   );
// };
// export default SideBar;


// import React, { useState } from 'react'
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import HomePage from './HomePage';
// import Login from './Login';
// import { MenuItem } from '@mui/material';
// import { Link } from 'react-router-dom';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );
// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         // color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// export default function SideBar() {
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);
//   const [menuData, setMenuData] = useState('Home')
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Home', 'Login', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />

//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         (menuData == "Home" && <HomePage />)
//         (menuData == "Login" && <Login />)
//         <MenuItem
//           title="Dashboard"
//           to="/"
//           // icon={<HomeOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />


//       </Box>
//     </Box>
//   );
// }


// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// // import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         // color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const Sidebar = () => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           // background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               // color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h3"
//                 // color={colors.grey[100]}
//                 >
//                   ADMINIS
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box mb="25px">
//               <Box display="flex" justifyContent="center" alignItems="center">
//                 <img
//                   alt="profile-user"
//                   width="100px"
//                   height="100px"
//                   src={`../../assets/user.png`}
//                   style={{ cursor: "pointer", borderRadius: "50%" }}
//                 />
//               </Box>
//               <Box textAlign="center">
//                 <Typography
//                   variant="h2"
//                   // color={colors.grey[100]}
//                   fontWeight="bold"
//                   sx={{ m: "10px 0 0 0" }}
//                 >
//                   Ed Roh
//                 </Typography>
//                 <Typography variant="h5" 
//                 // color={colors.greenAccent[500]}
//                 >
//                   VP Fancy Admin
//                 </Typography>
//               </Box>
//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               // color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Data
//             </Typography>
//             <Item
//               title="Manage Team"
//               to="/team"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Contacts Information"
//               to="/contacts"
//               icon={<ContactsOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Invoices Balances"
//               to="/login"
//               icon={<ReceiptOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               // color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Pages
//             </Typography>
//             <Item
//               title="Profile Form"
//               to="/form"
//               icon={<PersonOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Calendar"
//               to="/calendar"
//               icon={<CalendarTodayOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="FAQ Page"
//               to="/faq"
//               icon={<HelpOutlineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               // color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Charts
//             </Typography>
//             <Item
//               title="Bar Chart"
//               to="/bar"
//               icon={<BarChartOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Pie Chart"
//               to="/pie"
//               icon={<PieChartOutlineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Line Chart"
//               to="/line"
//               icon={<TimelineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Geography Chart"
//               to="/geography"
//               icon={<MapOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Sidebar;

import { useState } from "react";

import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomePage from './HomePage';
import Form from './Form';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  //   const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState('HomePage')


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('Homepage')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <ListItemText primary={HomePage} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('Form')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <ListItemText primary={Form} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {
          menuData === 'HomePage' && <HomePage />

        }
        {
          menuData === 'Form' && <Form />

        }
      </Box>
    </Box>
  );
}