import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({onSearch}) {

    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);  
    };

    return (
        <AppBar position="static">
            <Toolbar>
        
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search…"
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
                        }}
                        sx={{ backgroundColor: 'white', borderRadius: 1 }}
                    />

                    <Button
                        variant="contained"
                        size="medium"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => { navigate('/add') }}
                    >
                        Add User
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
