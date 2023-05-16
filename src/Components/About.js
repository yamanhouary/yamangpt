import { Stack, Box, Typography, Grid, Container } from '@mui/material'
import React from 'react'
import '../App.css'
import AboutIformations from './AboutIformations'
import AboutServices from './AboutServices'

const About = () => {
  return (
    <Stack sx={{
      minHeight: '100vh',
      width: '100%',
      zIndex: '999',
      backgroundColor: '#10121b',
      padding: '0 15px'
    }}>
      <Box data-aos = "fade-down" data-aos-duration = "2000" paddingTop={'80px'} height={'110px'} marginBottom={'100px'} position={'relative'}>
        <Typography variant='h3' color={'#fff'}>
          About Me
        </Typography>
        <h2 className='UnderLine'><span></span></h2>
        <Typography variant='h2'
          color={'#a4acc40b'}
          fontWeight={'800'}
          letterSpacing={'2px'}
          display={'inline-block'}
          textTransform={'uppercase'}
          position={'absolute'}
          top={'100%'}
          sx={{
            userSelect: 'none',
            fontSize: { sm: '60px', xs: '35px' }
          }}>
          About Me
        </Typography>
      </Box>
      <AboutIformations />
      <AboutServices />
      <div className='VerticalLines'>
        <span style={{ left: '30%' }}></span>
        <span style={{ left: '50%' }}></span>
        <span style={{ left: '70%' }}></span>
        <span style={{ left: '90%' }}></span>
      </div>
    </Stack>
  )
}

export default About