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
