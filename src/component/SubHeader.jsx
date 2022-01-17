import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';



function SubHeader() {
    return (
        <>
            <Box sx={{ width: '100%', minHeight: '62px', backgroundColor: '#9de1fe' }}>
                <Stack p={1} direction="row">
                    <IconButton sx={{ backgroundColor: 'white', color: 'lightblue', width: '40px', height: '40px', ml: 1, mt: 1 }}>
                        <NotificationsOffIcon sx={{ flexGrow: 1 }} />
                    </IconButton>

                    <Typography variant="h6" component="div" p={1} ml={3}>
                        <b>  Get Notified Of New Messages</b> <br />
                        <small>Turn on Desktop Notification ....... </small>
                    </Typography>
                </Stack>
            </Box>
         

        </>
    )
}

export default SubHeader
