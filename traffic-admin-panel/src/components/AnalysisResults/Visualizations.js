import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Visualizations = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        axios.get('/api/visualizations')
            .then(response => setChartData(response.data))
            .catch(error => console.error('Error fetching visualizations:', error));
    }, []);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category', 
                ticks: {
                    autoSkip: false,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Paper>
            <Typography variant="h6">Visualizations</Typography>
            <Line data={data} />
        </Paper>
    );
};

export default Visualizations;
