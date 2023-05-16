import React, { useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { links } from './utils/Constants'

const Sidebar = () => {

  return (
    <Stack sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRight: '1px solid #2e344e',
      minHeight: '100vh'
    }}>
      <Box>
        <div style={{
          width: '100%',
          borderBottom: '1px solid #2e344e',
          padding: '30px 0',
          textAlign: 'center'
        }}>
          <img src="/images/Hamza's logo.png" style={{
            width: '80%',
            border: '8px solid #2e344e',
            borderRadius: '65%'
          }} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
          borderBottom: '1px solid #2e344e',
        }}>
          {
            links.map((link, i) => (
              <Link key={i}
                to={link.to}
                className='Side-links'
              >
                {link.linkName}
              </Link>
            ))
          }
        </div>
        <div style={{
          textAlign: 'center',
          padding: '30px 0'
        }}>
          <Typography variant='h6' fontSize={'16px'} color={'#a4acc4'}>@ 2023 <strong>Yaman Houary</strong></Typography>
        </div>
      </Box>
    </Stack>
  )
}

export default Sidebar