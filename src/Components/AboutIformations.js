import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { informations } from './utils/Constants'
import '../App.css'

const AboutIformations = () => {
    return (
        <Stack flexDirection={'row'} zIndex={'999'}>
            <Grid container>
                <Grid data-aos = "fade-up" data-aos-duration = "2000" item md={6} xs={12} sx={{ paddingRight: '20px' , paddingBottom: '15px'}}>
                    <img src='/images/about-image.jpg' style={{ width: '100%' }} />
                </Grid>
                <Grid data-aos = "fade-down" data-aos-duration = "2000" item md={6} xs={12}>
                    <Typography variant='h4' color={'#fff'} sx={{
                        fontSize: {xs: '24px' , sm: '34px'}
                    }}>
                        I am <span style={{ color: '#0d6efd' }}>Yaman Houary</span>
                    </Typography>
                    <Typography variant='h6' color={'#a4acc4'} sx={{
                        fontSize: {xs: '14px' , sm: '20px'},
                        margin: '10px 0'
                    }}>
                        I am Designer & developer. I can provide Amazing Design and  perfect videos. I also make best services Design more & more interactive with web animations.
                    </Typography>
                    {
                        informations.map((information) => (
                            <Box>
                                <Typography variant='h6' sx={{
                                    display: 'flex',
                                    fontSize: {xs: '15px' , sm: '20px'},
                                    margin: '5px 0 ',
                                    color: '#a4acc4',
                                }}>
                                    <b style={{
                                        position: 'relative',
                                        minWidth: '100px',
                                    }}>{information.Questions}</b>
                                    :  {information.Answer}
                                </Typography>
                            </Box>
                        ))
                    }
                    <div className='Cv'>
                        <a href='#'>DOWNLOAD CV</a>
                    </div>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default AboutIformations