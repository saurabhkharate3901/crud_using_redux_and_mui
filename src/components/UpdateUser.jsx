import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../feature/UserDeatialsSlice';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, TextField } from '@mui/material';

function UpdateUser() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState({
        ...location.state.data
    });

    console.log('location', location)

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateData({
            id: data.id,
            name: data.name,
            email: data.email
        }))
        alert("Data Update Successfuly")
        navigate('/')
    }

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
        <form onSubmit={handleUpdate}>
            <h2>Update Record</h2>

            <Box sx={{ mb: 2 }}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    size="small"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    required
                />
            </Box>

            <Box sx={{ mb: 2 }}>
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                />
            </Box>

            <Button
                variant="contained"
                startIcon={<EditIcon />}
                size="large"
                type="submit"
                fullWidth
            >
                Update
            </Button>
        </form>
    </Box>
    )
}

export default UpdateUser