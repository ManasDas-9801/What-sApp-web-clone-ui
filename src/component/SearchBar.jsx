import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function CustomizedInputBase() {
    return (
        <Paper sx={{width: '100%',zIndex:100, borderRadius: 0,backgroundColor:'#f6f6f6', pb:1,pt:1}}>
            <Box

                sx={{ p: '2px 4px',backgroundColor: 'white', display: 'flex', alignItems: 'center', width:'90%',height: '40px',borderRadius:'18px' ,mx:'auto' }}
            >
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Contacts Here"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />


            </Box>
        </Paper>
    );
}
