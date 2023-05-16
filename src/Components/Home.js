import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../App.css'
import Particles from './utils/Particals';

const Home = () => {
  return (
    <Stack minHeight={'100vh'} minWidth={'100%'}>
      <Box sx={{
        textAlign: 'center',
        padding: { lg: '0 140px', md: '0 50px', xs: '20px' },
        margin: 'auto 0',
      }}>
        <Typography data-aos = "fade-down" data-aos-duration = "2000" variant='h3' color={'#fff'} sx={{ fontSize: { sm: '50px', xs: '25px' } }}>
          Hello, I am <span className='Name'>Yaman Houary</span>
        </Typography>
        <Typography data-aos = "fade-up" data-aos-duration = "2000" variant='h6' color={'#a4acc4'} p={'15px 0'}>
          I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
        </Typography>
        <Grid container sx={{ padding: {md: '15px 200px' , xs: '15px 0'}}}>
          <Grid item xs={3} marginBottom={'40px'}>
            <a href='https://www.facebook.com/yamanhouary/' className='Home-icons' target={'_blank'}><FacebookOutlinedIcon /></a>
          </Grid>
          <Grid item xs={3} marginBottom={'40px'}>
            <a href='https://www.linkedin.com/in/yamanhouary/' className='Home-icons' target={'_blank'}><LinkedInIcon /></a>
          </Grid>
          <Grid item xs={3} marginBottom={'40px'}>
            <a href='https://github.com/yamanhouary' className='Home-icons' target={'_blank'}><GitHubIcon /></a>
          </Grid>
          <Grid item xs={3} marginBottom={'40px'}>
            <a href='https://api.whatsapp.com/send/?phone=%2B971586941193&text&type=phone_number&app_absent=0' className='Home-icons' target={'_blank'}><WhatsAppIcon /></a>
          </Grid>
        </Grid>
      </Box>
      <Particles />
    </Stack>
  )
}

export default Home