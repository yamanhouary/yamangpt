import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Stack minHeight={'100vh'} minWidth={'100%'} paddingBottom={'50px'} p={'0 15px'} sx={{
      backgroundColor: '#10121b',
      zIndex: '999'
    }}>
      <Box data-aos = "fade-down" data-aos-duration = "2000" paddingTop={'80px'} height={'110px'} marginBottom={'100px'} position={'relative'}>
        <Typography variant='h3' color={'#fff'} sx={{
          fontSize: {sm: '48px' , xs: '40px'}
        }}>
          Contact Me
        </Typography>
        <h2 className='UnderLine'><span></span></h2>
        <Typography variant='h2'
          color={'#a4acc40b'}
          fontWeight={'800'}
          letterSpacing={'2px'}
          display={'inline-block'}
          textTransform={'uppercase'}
          position={'absolute'}
          top={'110%'}
          sx={{
            userSelect: 'none',
            fontSize: { sm: '60px', xs: '30px' }
          }}>
          Contact Me
        </Typography>
      </Box>
      <ContactForm />
    </Stack>
  )
}

export default Contact