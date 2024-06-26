import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomReports from './CustomReports';
import ExportData from './ExportData';
import DataAnalytics from './DataAnalytics';

const ReportsAnalytics = () => {
    return (
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Reports & Analytics
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <CustomReports />
            </Grid>
            <Grid item xs={12}>
                <ExportData />
            </Grid>
            <Grid item xs={12}>
                <DataAnalytics />
            </Grid>
        </Grid>
    );
};

export default ReportsAnalytics;
