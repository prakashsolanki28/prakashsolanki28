import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button'
import '../../asset/css/navbar.css';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';

// for mobile

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListSubheader from '@mui/material/ListSubheader';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// dark and light

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


const pages = ['Products', 'Pricing', 'Blog'];


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


function Navbar() 
{
  
  const [openNavLink,setNavLinkOpen] = React.useState(true);
  const [openMobileNavMenu,setMobileNavMenu] = React.useState(false);
  const ExtendNavListItems = () => {
    setNavLinkOpen(!openNavLink);
  };
  const ExtendMobileNavMenu = () =>{
    setMobileNavMenu(!openMobileNavMenu);
  }

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);


    
  return (
            <>
                    <AppBar className="mainNavbar" position="sticky">
                      <Toolbar>
                        {/* logo */}
                        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                            Sigma
                        </Typography>
                        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }} >
                            <FunctionsOutlinedIcon/>
                        </Typography>
                        {/* menu links */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                          <Button
                            key={page}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                          >
                            {page}
                          </Button>
                        ))}
                      </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button sx={{ display: { xs: 'none', sm: 'flex'} }} className="searchBar" disableRipple>
                            <IconButton disableRipple type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon sx={{color:'rgb(102, 178, 255)'}} />
                            </IconButton>
                            <span>Search...</span>
                        </Button>
                        <Button sx={{ display: { xs: 'flex', sm: 'none'} }} className="MenuButton" disableRipple variant="a" href="hello.html" >
                            <SearchIcon />
                        </Button>
                        {/* <Button className="MenuButton" disableRipple variant="a" href="hello.html" >
                            <InstagramIcon />
                        </Button> */}
                        <Button className="MenuButton" disableRipple variant="a" href="hi.html" >
                            <LightModeOutlinedIcon />
                        </Button>
                        <Button className="MenuButton" disableRipple variant="a" href="hi.html" >
                            <SettingsOutlinedIcon />
                        </Button>
                        <Button onClick={ExtendMobileNavMenu} sx={{display:{xs:'flex',sm:'none'}}} className="MenuButton" disableRipple variant="text">
                            {openMobileNavMenu? <CloseOutlinedIcon/>:<DragHandleOutlinedIcon/>}
                        </Button>
                      </Toolbar>
                    </AppBar>
                    <Toolbar sx={{p:'0',minHeight:0,display:{xs:'block',sm:'none'}}}>
                        <List className={openMobileNavMenu?'MobileNavList active':'MobileNavList'} component="nav">
                          <ListItemButton>
                            <ListItemText primary="Sent mail" />
                          </ListItemButton>
                          <ListItemButton>
                            <ListItemText primary="Drafts" />
                          </ListItemButton>
                          <ListItemButton onClick={ExtendNavListItems}>
                            <ListItemText primary="Inbox" />
                            {openNavLink ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse in={openNavLink} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Starred" />
                              </ListItemButton>
                            </List>
                          </Collapse>
                        </List>
                    </Toolbar>
                    
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
            </>
  )
}

export default Navbar