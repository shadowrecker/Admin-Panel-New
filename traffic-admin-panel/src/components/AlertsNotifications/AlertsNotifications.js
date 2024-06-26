import React from 'react';
import { Grid, Typography } from '@mui/material';
import RealTimeAlerts from './RealTimeAlerts';
import NotificationSettings from './NotificationSettings';

const AlertsNotifications = () => {
    return (
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Alerts & Notifications
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <RealTimeAlerts />
            </Grid>
            <Grid item xs={12}>
                <NotificationSettings />
            </Grid>
        </Grid>
    );
};

export default AlertsNotifications;
