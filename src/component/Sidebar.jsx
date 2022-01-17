import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Sidebar() {
    return (
        <div>
               <Box sx={{ height: '500px', overflowY: 'scroll',scrollBehavior:'smooth' }}>
               
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'} ,backgroundColor:'#ebebeb' }}>
                    <Stack direction="row">
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{ height: '50px', width: '50px', ml: 1, mt: .5 }} />


                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1}>
                            <b>  Vinay Kumar </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px' }} />
                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                            </Stack>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'} }}>
                    <Stack direction="row">
                        <Avatar sx={{ height: '50px', width: '50px', ml: 1, mt: .5,backgroundColor:'orange' }} >AK</Avatar>


                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1}>
                            <b>  Ayush Kumar </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px',color:'blue' }} />
                                <DoneIcon sx={{ width: '15px', marginLeft: '-4px',color:'blue' }} />

                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                            </Stack>
                           
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'}  }}>
                    <Stack direction="row">
                        <Avatar  sx={{ height: '50px', width: '50px', ml: 1, mt: .5,backgroundColor:'blue' }} > R </Avatar>


                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1}>
                            <b>  The Rock </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px' }} />
                                <DoneIcon sx={{ width: '15px', marginLeft: '-5px' }} />

                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                            </Stack>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'}  }}>
                    <Stack direction="row">
                    <Avatar  sx={{ height: '50px', width: '50px', ml: 1, mt: .5,backgroundColor:'red' }} > <small>AS</small> </Avatar>


                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1} >
                            <b>  Ankit Singh </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px' }} />
                                

                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                            </Stack>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'}  }}>
                    <Stack direction="row">
                    <Avatar  sx={{ height: '50px', width: '50px', ml: 1, mt: .5,backgroundColor:'green' }} > <small>R</small> </Avatar>

                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1} >
                            <b>  Rohit </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px' }} />
                                

                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                            </Stack>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'}  }}>
                    <Stack direction="row">
                    <Avatar  sx={{ height: '50px', width: '50px', ml: 1, mt: .5,backgroundColor:'cyan' }} > <small>SD</small> </Avatar>

                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1} >
                            <b>  Sajal Devnath </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px' }} />
                                

                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                            </Stack>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'}  }}>
                    <Stack direction="row">
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{ height: '50px', width: '50px', ml: 1, mt: .5 }} />


                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1}>
                            <b>  Vinay Kumar </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px' }} />
                                

                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                            </Stack>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                <Paper sx={{ p: .5, borderRadius: 0,":hover":{backgroundColor:'#ebebeb'}  }}>
                    <Stack direction="row">
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{ height: '50px', width: '50px', ml: 1, mt: .5 }} />


                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1}>
                            <b>  Virat Kolhi </b> <br />
                            <Stack direction="row">
                                <DoneIcon sx={{ width: '15px' }} />
                                

                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Always in Mood....... </small>
                            </Stack>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                    </Stack>
                   
                </Paper>
                
               
                
            </Box>
        </div>
    )
}

export default Sidebar
