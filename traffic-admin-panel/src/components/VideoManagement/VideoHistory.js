import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const VideoHistory = ({ onPlayVideo }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/videos/history/');
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching video history:', error);
            }
        };

        fetchVideos();
    }, []);

    const handlePlayVideo = (video) => {
        console.log('onPlayVideo:', onPlayVideo); // Debugging log
        if (typeof onPlayVideo === 'function') {
            onPlayVideo(video);
        } else {
            console.error('onPlayVideo is not a function');
        }
    };

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h6">Uploaded Video History</Typography>
            <List>
                {videos.map((video) => (
                    <ListItem key={video.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText primary={video.title} secondary={video.upload_date} />
                        <Button variant="contained" color="primary" onClick={() => handlePlayVideo(video)}>
                            Play
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default VideoHistory;

