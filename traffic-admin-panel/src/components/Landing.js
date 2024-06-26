// import React from 'react';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//     return (
//         <div className="landing-page">
//             <h1>Welcome to Traffic Analysis Admin Panel</h1>
//             <Link to="/login" className="btn">Login</Link>
//             <Link to="/signup" className="btn">Signup</Link>
//         </div>
//     );
// };

// export default LandingPage;

import React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import CSS file for styling

const Landing = () => {
    return (
        <div className="landing-container">
            <Paper className="landing-content">
                <Typography variant="h3" gutterBottom>
                    Welcome to Traffic Analysis Admin Panel
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Please sign up or log in to continue.
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/signup" style={{ marginRight: 10 }}>
                    Signup
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/login">
                    Login
                </Button>
            </Paper>
        </div>
    );
};

export default Landing;
