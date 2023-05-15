import { Stack, Typography, Grid, Box } from '@mui/material'
import React from 'react'
import { ServiceBox } from './utils/Constants'

const AboutServices = () => {
    return (
        <Stack paddingBottom={'50px'}>
            <div data-aos = 'fade-right' data-aos-duration = "2000" style={{ paddingTop: '80px', position: 'relative' }}>
                <Typography color={'#fff'} variant='h3' >
                    Services
                </Typography>
                <h2 className='UnderLine'><span></span></h2>
                <Typography variant='h2'
                    color={'#a4acc40b'}
                    fontWeight={'800'}
                    letterSpacing={'2px'}
                    display={'inline-block'}
                    textTransform={'uppercase'}
                    position={'relative'}
                    top={'-25px'}
                    sx={{
                        userSelect: 'none',
                        fontSize: { sm: '60px', xs: '40px' }
                    }}
                >
                    Services
                </Typography>
            </div>
            <Grid container spacing={3}>
                {ServiceBox.map((item) => (
                    <Grid data-aos = {item.Aos} data-aos-duration = "2000" item md={4} sm={6} xs={12} key={item}>
                        <Box sx={{
                            border: '1px solid #2e344e',
                            borderTop: '5px solid #0d6efd',
                            transition: '.3s ease'
                        }}>
                            <div style={{ padding: '20px' , backgroundColor: '#191d2b' }}>
                                <Typography color={'#0d6efd'}>
                                    {item.icon}
                                </Typography>
                                <Typography variant='h5' p={'10px 0'} color={'#fff'}>
                                    {item.name}
                                </Typography>
                                <span style={{
                                    height: '4px',
                                    width: '80px',
                                    backgroundColor: '#2e344e',
                                    position: 'absolute',
                                    borderRadius: '20px'
                                }}></span>
                                <Typography variant='h6' fontSize={'18px'} color={'#a4acc4'} paddingTop={'15px'}>
                                    {item.description}
                                </Typography>
                            </div>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}

export default AboutServices