import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { contactInformation } from './utils/Constants'

const ContactInf = () => {
    return (
        <Stack data-aos = "fade-down" data-aos-duration = "2000" sx={{
            paddingLeft: {md: '20px' , xs: '0'}
        }}>
            {
                contactInformation.map((item, i) => (
                    <Box zIndex={'999'} key={i} sx={{
                        backgroundColor: '#1c1f2c',
                        margin: '15px 0',
                        padding: {sm: '30px' , xs: '20px 10px'},
                        display: 'flex',
                        flexDirection: {sm: 'row' , xs: 'column'}
                    }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                border: '1px solid #2e344e',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#a4acc4',
                                marginRight: '30px'
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <Typography color={'#fff'} variant={'h6'} margin={'10px 0'}>
                                    {item.title}
                                </Typography>
                                <Typography variant='h6' color={'#a4acc4'} sx={{
                                    '&:hover':{
                                        color: '#0d6efd'
                                    },
                                    transition: '.3s ease',
                                    fontSize: {sm: '22px' , xs: '16px'},
                                }}>
                                    {item.information}
                                </Typography>
                            </div>
                    </Box>
                ))
            }
        </Stack>
    )
}

export default ContactInf