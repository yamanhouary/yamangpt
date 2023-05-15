import React from 'react'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { projects } from './utils/Constants'
import Project from './Project'

const Portfolio = () => {
  return (
    <Stack minHeight={'100vh'} minWidth={'100%'} p={'0px 15px'} sx={{
      backgroundColor: '#10121b',
      zIndex: '999'
    }}>
      <Box data-aos = "fade-right" data-aos-duration = "2000" paddingTop={'80px'} height={'110px'} marginBottom={'100px'} position={'relative'}>
        <Typography variant='h3' color={'#fff'}>
          Portfolios
        </Typography>
        <h2 className='UnderLine'><span></span></h2>
        <Typography  variant='h2'
          color={'#a4acc40b'}
          fontWeight={'800'}
          letterSpacing={'2px'}
          display={'inline-block'}
          textTransform={'uppercase'}
          position={'absolute'}
          top={'100%'}
          whiteSpace={'nowrap'}
          sx={{
            userSelect: 'none',
            fontSize: { sm: '60px', xs: '35px' }
          }}>
          Projects
        </Typography>
      </Box>
      <Project />
    </Stack>
  )
}

export default Portfolio