import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SoftwareUpdates = () => {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        axios.get('/api/updates')
            .then(response => {
                setUpdates(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the software updates!", error);
            });
    }, []);

    return (
        <div className="software-updates">
            <h2>Software Updates</h2>
            <ul>
                {updates.map((update, index) => (
                    <li key={index}>{update.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default SoftwareUpdates;
