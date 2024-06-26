import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogsMonitoring = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get('/api/logs')
            .then(response => {
                setLogs(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the logs!", error);
            });
    }, []);

    return (
        <div className="logs-monitoring">
            <h2>Logs and Monitoring</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default LogsMonitoring;
