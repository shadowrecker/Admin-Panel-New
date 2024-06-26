import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Paper, Typography } from '@mui/material';

const UploadVideo = ({ onVideoUpload }) => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Debugging line

        if (!token) {
            setError('No authentication token found');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('video', file);

        try {
            const response = await axios.post('http://localhost:8000/api/videos/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Token ${token}`,
                },
            });

            console.log('Response:', response); // Debugging line
            onVideoUpload(response.data);
            navigate('/dashboard'); // Redirect to dashboard
        } catch (error) {
            console.error('Error uploading video:', error);
            console.log('Error response:', error.response); // Debugging line
            setError('Failed to upload video');
        }
    };

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
                Upload Video
            </Typography>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <input type="file" onChange={handleFileChange} />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: 10 }}>
                    Upload
                </Button>
            </form>
        </Paper>
    );
};

export default UploadVideo;




