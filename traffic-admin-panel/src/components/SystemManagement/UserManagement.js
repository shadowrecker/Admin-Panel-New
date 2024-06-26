import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({ id: '', username: '', email: '', password: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleOpen = (user = { id: '', username: '', email: '', password: '' }) => {
        setCurrentUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleSave = async () => {
        if (currentUser.id) {
            // Update user
            try {
                await axios.put(`http://localhost:8000/api/users/${currentUser.id}/`, currentUser);
            } catch (error) {
                console.error('Error updating user:', error);
            }
        } else {
            // Create new user
            try {
                await axios.post('http://localhost:8000/api/users/', currentUser);
            } catch (error) {
                console.error('Error creating user:', error);
            }
        }
        handleClose();
        fetchUsers();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${id}/`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
                User Management
            </Typography>
            <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add User</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Custom ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.custom_id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => handleOpen(user)}>Edit</Button>
                                <Button variant="contained" color="secondary" style={{ marginLeft: 10 }} onClick={() => handleDelete(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{currentUser.id ? 'Edit User' : 'Add User'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {currentUser.id ? 'Edit the details of the user.' : 'Enter the details of the new user.'}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        value={currentUser.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={currentUser.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={currentUser.password}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default UserManagement;
