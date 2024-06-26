import React, { useState } from 'react';
import axios from 'axios';

const ModelManagement = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('model', selectedFile);

        axios.post('/api/models/upload', formData)
            .then(response => {
                alert('Model uploaded successfully');
            })
            .catch(error => {
                console.error('There was an error uploading the model!', error);
            });
    };

    return (
        <div className="model-management">
            <h2>Model Management</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
};

export default ModelManagement;
