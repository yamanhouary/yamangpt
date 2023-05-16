import { Stack, Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { links } from './utils/Constants'
import { Typography } from '@mui/material'

const SidebarMenu = () => {
    return (
        <Stack zIndex={'800'} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '30px',
            borderRight: '1px solid #2e344e',
            backgroundColor: '#1c1f2c',
            minHeight: '100vh',
        }}>
            <Box display={'flex'} justifyContent={'center'} paddingBottom={'30px'}>
                <Box sx={{
                    width: '85%',
                    border: '8px solid #2e344e',
                    borderRadius: '65%',
                    height: '125px'
                }}>
                    <img src='/images/Hamza Name Tattoo Designs.png' style={{
                        width: '100%',
                        height: '110px',
                        paddingBottom: '0',
                        borderRadius: '50%'
                    }} />
                </Box>
            </Box>
            <Box sx={{
                borderTop: '1px solid #2e344e',
                width: '100%',
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
            </Box>
            <Box paddingTop={'20px'}>
                <Typography variant='h6' fontSize={'16px'} color={'#a4acc4'}>@ 2023 <strong>Yaman Houary</strong></Typography>
            </Box>
        </Stack>
    )
}

export default SidebarMenu