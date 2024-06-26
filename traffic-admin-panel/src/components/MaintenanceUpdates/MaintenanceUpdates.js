import React from 'react';
import { Grid, Typography } from '@mui/material';
import ModelManagement from './ModelManagement';
import SoftwareUpdates from './SoftwareUpdates';
import SupportDocumentation from './SupportDocumentation';

const MaintenanceUpdates = () => {
    return (
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Maintenance & Updates
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ModelManagement />
            </Grid>
            <Grid item xs={12}>
                <SoftwareUpdates />
            </Grid>
            <Grid item xs={12}>
                <SupportDocumentation />
            </Grid>
        </Grid>
    );
};

export default MaintenanceUpdates;
