import React from 'react';
import { Grid, Typography } from '@mui/material';
import DetailedReports from './DetailedReports';
import Visualizations from './Visualizations';
import Annotations from './Annotations';

const AnalysisResults = () => {
    return (
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Analysis Results
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <DetailedReports />
            </Grid>
            <Grid item xs={12}>
                <Visualizations />
            </Grid>
            <Grid item xs={12}>
                <Annotations />
            </Grid>
        </Grid>
    );
};

export default AnalysisResults;
