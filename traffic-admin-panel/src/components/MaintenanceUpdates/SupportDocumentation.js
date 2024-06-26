import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SupportDocumentation = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        axios.get('/api/docs')
            .then(response => {
                setDocs(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the support documentation!", error);
            });
    }, []);

    return (
        <div className="support-documentation">
            <h2>Support and Documentation</h2>
            <ul>
                {docs.map((doc, index) => (
                    <li key={index}>{doc.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SupportDocumentation;
