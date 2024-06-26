import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Signup form submitted'); // Debugging log
        try {
            const response = await axios.post('http://localhost:8000/api/register/', { username, password, email });
            console.log('Signup response:', response); // Debugging log
            navigate('/login');
        } catch (error) {
            console.error('Signup failed', error);
            if (error.response) {
                console.error('Signup error data:', error.response.data); // Debugging log for error details
            }
        }
    };

    return (
        <div className="signup">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
