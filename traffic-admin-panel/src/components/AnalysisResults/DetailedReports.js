import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const DetailedReports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get('/api/reports')
            .then(response => setReports(response.data))
            .catch(error => console.error('Error fetching reports:', error));
    }, []);

    return (
        <Paper>
            <Typography variant="h6">Detailed Reports</Typography>
            <List>
                {reports.map(report => (
                    <ListItem key={report.id}>
                        <ListItemText
                            primary={report.title}
                            secondary={new Date(report.date).toLocaleString()}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default DetailedReports;
