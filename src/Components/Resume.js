import { Stack , Box , Typography } from '@mui/material'
import React from 'react'
import MySkills from './MySkills'

const Resume = () => {
  return (
    <Stack minHeight={'100vh'} padding={'0 15px'} minWidth={'100%'} sx={{
      backgroundColor: '#10121b',
      zIndex: '999'
    }}>
        <MySkills />
    </Stack>
  )
}

export default Resume