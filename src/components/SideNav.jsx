import React from 'react';
import { Drawer, List, ListItemButton, Toolbar } from "@mui/material";
import { NavLink as RouterLink } from 'react-router-dom';

const isActive = {
    '&.active': {
        backgroundColor: 'aliceblue'
    }
}

export default function SideNav(props) {
    const LinkList = () => {
        return <List >
            <ListItemButton component={RouterLink} to='/lorem' sx={isActive}>Lorem Ipsum generator</ListItemButton>
            <ListItemButton component={RouterLink} to='/case' sx={isActive}>Case convertor</ListItemButton>
            <ListItemButton component={RouterLink} to='/box-shadow' sx={isActive}>Box shadow generator</ListItemButton>
            <ListItemButton component={RouterLink} to='/blank' sx={isActive}>Blank page</ListItemButton>
        </List>
    }
  return (
    <>
        {/* desktop drawer */}
        <Drawer
            sx={{
                display: { xs: 'none', md: 'block' },
                width: 320,
                '& .MuiDrawer-paper': { width: 320, boxSizing: 'border-box' }
                }}
            variant='permanent'
            anchor='left'
        >
            <Toolbar />
            <LinkList />
        </Drawer>
        {/* Mobile drawer */}
        <Drawer
            sx={{
                display: { xs: 'block', md: 'none' },
                width: 320,
                '& .MuiDrawer-paper': { width: 320, boxSizing: 'border-box' }
                }}
            variant='temporary'
            anchor='left'
            open={props.isOpen}
            onClose={props.handleToggle}
            ModalProps={{ keepMounted: true }}
        >
            <Toolbar />
            <LinkList />
        </Drawer>
    </>
  )
}
