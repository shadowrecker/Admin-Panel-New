import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ handleDrawerToggle, handleSidebarToggle, isAuthenticated, handleLogout }) => {
    return (
        <AppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <IconButton
                    color="inherit"
                    aria-label="toggle sidebar"
                    edge="start"
                    onClick={handleSidebarToggle}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap style={{ flexGrow: 1, textAlign: 'center' }}>
                    Traffic Analysis Admin Panel
                </Typography>
                {isAuthenticated && (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
