import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Back from '../images/bckimage.png';
import SubHeader from './SubHeader';
import Header from './Header';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import MainBar from './MainBar';


export default function BasicGrid() {
    return (
        <>
         <Box sx={{width:'100%',height:'130px',backgroundColor:'#128c7e'}} >
            
        
            <Box sx={{ width:{xs:'100%',md: '95%'},pt:{xs:0,md:4}, mx: 'auto',height:'750px',overflowY:'hidden'}}>
                <Grid container spacing={0} >
                    <Grid item sm={4} sx={{display:{xs:'none',sm:'block'}}} >
                        <Paper>
                              <Header />
                              <SubHeader />
                              <SearchBar />
                              <Sidebar />
                        </Paper>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Paper>
                           
                            <MainBar /> 
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
         </Box>
        </>
    );
}
