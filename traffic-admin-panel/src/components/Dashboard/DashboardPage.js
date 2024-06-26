import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import OverviewStatistics from './OverviewStatistics';
import RealTimeFeed from './RealTimeFeed';
import RecentAlerts from './RecentAlerts';
import VideoHistory from '../VideoManagement/VideoHistory';

const DashboardPage = ({ uploadedVideo }) => {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isUploadedVideo, setIsUploadedVideo] = useState(false);

    useEffect(() => {
        if (uploadedVideo) {
            setCurrentVideo(uploadedVideo);
            setIsUploadedVideo(true);
        }
    }, [uploadedVideo]);

    const handleVideoUpload = (video) => {
        console.log("Video uploaded:", video); 
        setCurrentVideo(video);
        setIsUploadedVideo(true);
    };

    const handleBackToRealTimeFeed = () => {
        setCurrentVideo(null);
        setIsUploadedVideo(false);
    };

    return (
        <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Dashboard
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <OverviewStatistics />
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h6">Real-time Feed</Typography>
                    <RealTimeFeed
                        currentVideo={currentVideo}
                        isUploadedVideo={isUploadedVideo}
                        onBack={handleBackToRealTimeFeed}
                    />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h6">Recent Alerts</Typography>
                    <RecentAlerts />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <VideoHistory onPlayVideo={handleVideoUpload} />
            </Grid>
        </Grid>
    );
};

export default DashboardPage;
