import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import UploadVideo from './UploadVideo';
import VideoHistory from './VideoHistory';

const VideoManagement = ({ onVideoUpload }) => {
    return (
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Video Management
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <UploadVideo onVideoUpload={onVideoUpload} />
            </Grid>
            <Grid item xs={12}>
                <VideoHistory />
            </Grid>
        </Grid>
    );
};

export default VideoManagement;
