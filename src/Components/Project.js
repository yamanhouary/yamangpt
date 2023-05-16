import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Work } from './utils/Constants'
import '../App.css'
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const Project = () => {
    return (
        <Grid container spacing={3} zIndex={'999'} paddingBottom={'50px'}>
            {
                Work.map((item, i) => (
                    <Grid data-aos = {item.Aos} data-aos-duration = '2000' item md={4} sm={6} xs={12} key={i}>
                        <Box>
                            <div className='Project-parent' style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                overflowX: 'hidden'
                            }}>
                                <img src={item.image} style={{ width: '100%', borderRadius: '4px' }} />
                                <div className='Link-Box'>
                                    <Typography
                                        color={'#fff'}
                                        display={'flex'}
                                        justifyContent={'center'} p={'10px'}
                                        alignItems={'center'}
                                        borderRadius={'50%'}
                                        sx={{
                                            backgroundColor: '#0d6efd'
                                        }}>
                                        <a href={item.projectVercelLink} target='_blank' style={{ color: '#fff', textAlign: 'center', height: '25px' }}><InsertLinkIcon /></a>
                                    </Typography>
                                </div>
                            </div>

                            <Typography variant='h5' color={'#fff'} paddingTop={'10px'}>
                                <a href={item.projectVercelLink} target='_blank' className='project-Name'>{item.projectName}</a>
                            </Typography>
                            <Typography variant='h6' color={'#a4acc4'}>
                                {item.About}
                            </Typography>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Project