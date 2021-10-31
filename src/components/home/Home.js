import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


function Home() {

    const [isOpen, setIsOpen] = useState(false)
  let history = useHistory()
  const toggleDrawer = (newvalue) => {setIsOpen(newvalue)}
  const handleClick = (route) => {
    toggleDrawer(false)
    history.push(route)
  }
    return ( 
    <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" onClick = {() => toggleDrawer(true)} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={() => toggleDrawer(false)} onOpen={() => toggleDrawer(true)}>
        
        <Box>
          <p> hi</p>
          <ListItemButton onClick = {() => handleClick('/about')}>
                <ListItemIcon>
                  <HomeIcon sx={{color: "primary.main"}}/>
                </ListItemIcon>
                <ListItemText primary="Cool"/>
              </ListItemButton>
        </Box>
        </Drawer>


      <Typography variant="h6" color="inherit" component="div">
        Clark
      </Typography>
    </Toolbar>
  </AppBar> );
    
}

export default Home;