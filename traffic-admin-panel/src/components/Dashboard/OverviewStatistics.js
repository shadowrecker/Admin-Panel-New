import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Paper } from '@mui/material';

const OverviewStatistics = () => {
    const [stats, setStats] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Token:', token); 
                if (!token) {
                    setError('No authentication token found');
                    return;
                }

                const response = await axios.get('http://localhost:8000/api/stats/overview/', {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });

                console.log('Response headers:', response.headers); 
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching statistics:', error);
                console.log('Error response:', error.response); 
                setError('Failed to fetch statistics');
            }
        };

        fetchStatistics();
    }, []);

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
                Overview Statistics
            </Typography>
            <Typography variant="body1">
                Videos Analyzed: {stats.videosAnalyzed || 0}
            </Typography>
            <Typography variant="body1">
                Detected Anomalies: {stats.detectedAnomalies || 0}
            </Typography>
            <Typography variant="body1">
                Traffic Density: {stats.trafficDensity || 'N/A'}
            </Typography>
            <Typography variant="body1">
                System Performance: {stats.systemPerformance || 'N/A'}
            </Typography>
        </Paper>
    );
};

export default OverviewStatistics;

