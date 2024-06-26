import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RealTimeAlerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        axios.get('/api/alerts/realtime')
            .then(response => {
                setAlerts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the real-time alerts!", error);
            });
    }, []);

    return (
        <div className="real-time-alerts">
            <h2>Real-time Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default RealTimeAlerts;
