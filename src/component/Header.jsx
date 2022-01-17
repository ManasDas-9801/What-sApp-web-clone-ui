import React from 'react'
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
const Header = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '59px',
                    backgroundColor: '#ededed',
                    zIndex: 100,
                    borderRadius: '1px'

                }}
            >
                <Stack direction="row" spacing={2} p={1}>
                    <Box flexGrow={1}>
                        <Avatar alt="Cindy Baker" src="https://lh3.googleusercontent.com/ogw/ADea4I7jV8hsKsX0Ac83ypEhg0glqA2O00kC6h8aYbBF9g=s32-c-mo" sx={{ ml: 1, }} />
                    </Box>
                    <Box padding={1}>
                        <Tooltip title="Status">
                            <DonutLargeIcon sx={{ mr: 4, color: '#51585c', }} />
                        </Tooltip>
                        <Tooltip title="Contact">
                            <ChatIcon sx={{ mr: 4, color: '#51585c', }} />
                        </Tooltip>
                       <Tooltip title="More">
                             <MoreVertIcon sx={{ mr: 2, color: '#51585c', }} />
                            
                       </Tooltip>
                    </Box>
                </Stack>

               
            </Box>
                
        </>
    )
}

export default Header;