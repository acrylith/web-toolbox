import React from 'react';
import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function TopBar(props) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CssBaseline />
        <Toolbar>
            <IconButton
                color='inherit'
                aria-label='open-drawer'
                edge='start'
                onClick={props.handleToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
          <Typography noWrap component={Link} to='/' variant="h5" sx={{ color: 'inherit', textDecoration: 'none' }}>WebToolbox</Typography>
        </Toolbar>
    </AppBar>
  )
}