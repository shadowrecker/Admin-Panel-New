import React, { useState } from 'react';
import { Paper, Typography, Button, TextField } from '@mui/material';

const Annotations = ({ videoId }) => {
    const [annotations, setAnnotations] = useState([]);
    const [newAnnotation, setNewAnnotation] = useState('');

    const handleAddAnnotation = () => {
        setAnnotations([...annotations, newAnnotation]);
        setNewAnnotation('');
    };

    return (
        <Paper>
            <Typography variant="h6">Annotations</Typography>
            <TextField
                value={newAnnotation}
                onChange={(e) => setNewAnnotation(e.target.value)}
                label="New Annotation"
                fullWidth
            />
            <Button onClick={handleAddAnnotation} variant="contained" color="primary">
                Add Annotation
            </Button>
            <ul>
                {annotations.map((annotation, index) => (
                    <li key={index}>{annotation}</li>
                ))}
            </ul>
        </Paper>
    );
};

export default Annotations;
