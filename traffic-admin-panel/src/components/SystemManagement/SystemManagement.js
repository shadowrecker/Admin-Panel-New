import React from 'react';
import { Grid, Typography } from '@mui/material';
import UserManagement from './UserManagement';
import Settings from './Settings';
import LogsMonitoring from './LogsMonitoring';

const SystemManagement = () => {
    return (
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    System Management
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <UserManagement />
            </Grid>
            <Grid item xs={12}>
                <Settings />
            </Grid>
            <Grid item xs={12}>
                <LogsMonitoring />
            </Grid>
        </Grid>
    );
};

export default SystemManagement;
