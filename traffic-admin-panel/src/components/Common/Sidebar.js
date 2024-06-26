import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const toolbarHeight = 64;

const Sidebar = ({ mobileOpen, handleDrawerToggle, isMobile, open }) => {
    const drawer = (
        <div>
            <List>
                <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/video-management" onClick={handleDrawerToggle}>
                    <ListItemText primary="Video Management" />
                </ListItem>
                <ListItem button component={Link} to="/reports-analytics" onClick={handleDrawerToggle}>
                    <ListItemText primary="Reports & Analytics" />
                </ListItem>
                <ListItem button component={Link} to="/analysis-results" onClick={handleDrawerToggle}>
                    <ListItemText primary="Analysis Results" />
                </ListItem>
                <ListItem button component={Link} to="/alerts-notifications" onClick={handleDrawerToggle}>
                    <ListItemText primary="Alerts & Notifications" />
                </ListItem>
                <ListItem button component={Link} to="/system-management" onClick={handleDrawerToggle}>
                    <ListItemText primary="System Management" />
                </ListItem>
                <ListItem button component={Link} to="/maintenance-updates" onClick={handleDrawerToggle}>
                    <ListItemText primary="Maintenance & Updates" />
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <>
            {isMobile ? (
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    PaperProps={{
                        style: {
                            height: `calc(100vh - ${toolbarHeight}px)`,
                            marginTop: `${toolbarHeight}px`,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            ) : (
                <Drawer
                    variant="persistent"
                    open={open}
                    sx={{
                        width: open ? drawerWidth : 0,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: open ? drawerWidth : 0,
                            height: `calc(100vh - ${toolbarHeight}px)`,
                            marginTop: `${toolbarHeight}px`,
                            transition: 'width 0.3s',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}
        </>
    );
};

export default Sidebar;
