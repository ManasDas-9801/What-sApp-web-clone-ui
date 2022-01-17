import React from 'react'
import { Box, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import Back from '../images/bckimage.png';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AttachmentIcon from '@mui/icons-material/Attachment';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default Sidebar

function Top() {
    return (
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
                <Box flexGrow={1} >
                    <Stack direction="row">
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{ ml: 1, }} />
                        <Typography variant="p" component="div" ml={3}>
                            <b className='text-lead'>  Vinay Kumar </b> <br />



                            <small style={{ marginLeft: '4px' }}>Its High time to get Up ....... </small>

                        </Typography>
                    </Stack>
                </Box>
                <Box padding={{ xs: 0, md: 1 }}>
                    <Tooltip title="Search">
                        <SearchIcon sx={{ mr: { xs: 1, md: 4 }, color: '#51585c', }} />
                    </Tooltip>

                    <Tooltip title="More">
                        <MoreVertIcon sx={{ mr: { xs: 1, md: 4 }, color: '#51585c', }} />

                    </Tooltip>
                </Box>
            </Stack>


        </Box>
    );
}
function Bottom() {

    function handle(e){
        alert("Under Construction ")
    }
    return (
        <Box
            sx={{
                width: '100%', zIndex: 5, borderRadius: 0, backgroundColor: 'white', height: '66px', p: 2
            }}
        >
            <Stack direction="row">
                <Tooltip title="Emoticons">
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="Emoji">
                        <InsertEmoticonIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Attach file">
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="Attach">
                        <AttachmentIcon />
                    </IconButton>
                </Tooltip>
                <Box sx={{ p: '2px 4px', backgroundColor: 'white', display: 'flex', alignItems: 'center', width: '90%', height: '40px', borderRadius: '18px', mx: 'auto' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Type Message in here "
                        inputProps={{ 'aria-label': 'Type Message in Here ' }}
                    />
                </Box>
                <Tooltip title="Voice Message">
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="Emoji">
                        <KeyboardVoiceIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Send">
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="Emoji">
                        <SendIcon onClick={handle} />
                    </IconButton>
                </Tooltip>
            </Stack>

        </Box>
    );
}

function Sidebar() {
    return (
        <div>
            <Top />
            <Box sx={{ maxWidth: '100%', backgroundImage: `url(${Back})`, }}>
                <Box sx={{ backgroundColor: 'rgba(255,255,255, 0.94)', height: '570px', maxWidth: '100%', overflowY: 'scroll', p: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Paper sx={{ backgroundColor: 'white', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                             <Stack direction="row">
                                <Typography className='p text-lead'>
                                   <small> Hello</small>
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />

                             </Stack>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: 'white', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                            <Typography>
                                <small> This is manas das alaways Reday to grill</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: 'white', p: 1, mb: .5, display: 'inline-block' }}>
                            <Typography>
                                <small> 🧀🧇🥞🥞🍗</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Paper sx={{ backgroundColor: '#dcf8c6', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography>
                                <small> Hey Man How You Doinn !!!</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#dcf8c6', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography>
                                <small>All good  .! Tenetur totam nihil aliquam laudantium, deleniti odit. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#dcf8c6', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography>
                                <small> See Ya soon 😀😀😀😀. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>


                    <Box sx={{ flexGrow: 1, mt: '8%' }}>
                        <Paper sx={{ backgroundColor: 'white', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                            <Typography className='p text-lead'>
                                <small> Hello</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: 'white', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                            <Typography>
                                <small> This is manas das alaways Reday to grill</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: 'white', p: 1, mb: .5, display: 'inline-block' }}>
                            <Typography>
                                <small> 🧀🧇🥞🥞🍗</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>
                    <Box sx={{ flexGrow: 1,mb:2 }}>
                        <Paper sx={{ backgroundColor: '#dcf8c6', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography>
                                <small> Hey Man How You Doinn !!!</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#dcf8c6', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography>

                                <small>All good  . Lorem ipsum dolor sit, amet consectetur adip. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#dcf8c6', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography>
                                <small>  See Ya mate  😀😀😀😀. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
                <Bottom />
            </Box>
        </div>
    )
}