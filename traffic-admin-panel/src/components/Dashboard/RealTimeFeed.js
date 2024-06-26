import React from 'react';
import { Button } from '@mui/material';

const RealTimeFeed = ({ currentVideo, isUploadedVideo, onBack }) => {
    const videoUrl = currentVideo ? currentVideo.video_url : '';

    console.log('currentVideo:', currentVideo);
    console.log('videoUrl:', videoUrl); 
    return (
        <div>
            {isUploadedVideo ? (
                <div>
                    <Button variant="contained" color="secondary" onClick={onBack} style={{ marginBottom: 10 }}>
                        Back to Real-Time Feed
                    </Button>
                    <p>Uploaded video is being played</p>
                    <video width="100%" height="auto" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div>
                    <p>Real-time feed is currently being displayed</p>
                    <img src="http://localhost:8000/processor/realtime_feed/" alt="Real-time feed" width="100%" height="auto" />
                </div>
            )}
        </div>
    );
};

export default RealTimeFeed;



