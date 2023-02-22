// import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext } from "react";
// // import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

// const Navbar = () => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   // const colorMode = useContext(ColorModeContext);

//   return (
//     <Box display="flex" justifyContent="space-between" p={2}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         // backgroundColor={colors.primary[400]}
//         borderRadius="3px"
//       >
//         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* ICONS */}
//       <Box display="flex">
//         {/* <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlinedIcon />
//           ) : (
//             <LightModeOutlinedIcon />
//           )}
//         </IconButton> */}
//         <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <SettingsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <PersonOutlinedIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;


// import React from "react";
// import clsx from "clsx";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Avatar
// } from "@material-ui/core";
// // import MenuIcon from "@material-ui/icons/Menu";
// import useStyles from "./styles";
// const Navbar = (props) => {
//   const { open, setOpen } = props;
//   const classes = useStyles();
//   return (
//     <AppBar
//       position="fixed"
//       className={clsx(
//         classes.appBar,
//         {
//           [classes.appBarShift]: open
//         },
//         "bgColor text-light text-weight-bold"
//       )}
//     >
//       <Toolbar>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           onClick={() => setOpen(!open)}
//           edge="start"
//           className={classes.menuButton}
//         >
//           {/* <MenuIcon /> */}
//         </IconButton>
//         <Typography
//           variant="h6"
//           noWrap
//           display="inline"
//           style={{ flexGrow: 1 }}
//         >
//           Super Admin Dashboard
//         </Typography>
//         <Avatar width="50px" />
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default Navbar;

// import React from 'react'



// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SideBar from './SideBar';

// export default function Navbar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Alvrio
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//       <SideBar />
//     </Box>
//   );
// }

import React, { useState } from 'react'
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
import Login from './Login';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

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
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        // color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState('Home')
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

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
          {['Home', 'Login', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        (menuData == "Home" && <HomePage />)
        (menuData == "Login" && <Login />)
        <MenuItem
          title="Dashboard"
          to="/"
          // icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />


      </Box>
    </Box>
  );
}
