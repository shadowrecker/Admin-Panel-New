import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import axios from 'axios';

const RecentAlerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        
        const fetchAlerts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/alerts/recent');
                setAlerts(response.data);
            } catch (error) {
                console.error('Error fetching recent alerts', error);
            }
        };

        fetchAlerts();
    }, []);

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h6">Recent Alerts</Typography>
            {alerts.length > 0 ? (
                alerts.map((alert, index) => (
                    <Typography key={index}>{alert.description}</Typography>
                ))
            ) : (
                <Typography>No recent alerts</Typography>
            )}
        </Paper>
    );
};

export default RecentAlerts;
