import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createData } from '../feature/UserDeatialsSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';


function AddUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputData, setInputData] = useState({ name: '', email: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createData({ name: inputData.name, email: inputData.email }))
        setInputData({ name: '', email: '' })
        alert("Data Added Successfuly");
        navigate('/');
    }

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
            <form onSubmit={handleSubmit}>
                <h2>Add the New Record</h2>

                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={inputData.name}
                        size="small"
                        onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                        required
                    />
                </Box>

                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={inputData.email}
                        size="small"
                        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                        required
                    />
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Add
                </Button>
            </form>
        </Box>
    )
}

export default AddUser