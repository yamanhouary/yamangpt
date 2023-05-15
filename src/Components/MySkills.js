import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { skills, LanguageSkills } from './utils/Constants'

const MySkills = () => {
    return (
        <>
            <Box data-aos = "fade-down" data-aos-duration = "2000" paddingTop={'80px'} height={'110px'} marginBottom={'100px'} position={'relative'}>
                <Typography variant='h3' color={'#fff'} sx={{
                    fontSize: {sm: '48px' , xs: '24px'}
                }}>
                    My Skills
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
                        fontSize: { sm: '60px', xs: '27px' }
                    }}>
                    My Skills
                </Typography>
            </Box>
            <Box zIndex={'999'}>
                <Typography data-aos = "fade-up" data-aos-duration = "2000" color={'#fff'} variant='h3' padding={'10px'} sx={{
                    fontSize: {sm: '48px' , xs: '24px'}
                }}>
                    Coding Skills
                </Typography>
            </Box>
            <Grid container paddingBottom={'30px'}>
                {
                    skills.map((skill, i) => (
                        <Grid data-aos = {skill.Aos} data-aos-duration= '2000' item sm={6} xs={12} padding={'10px'} key={i}>
                            <Typography variant='h6' display={'block'} color={'#fff'}>
                                {skill.skillName}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <div>
                                    <Typography variant='h6' color={'#a4acc4'} flex={'0 0 60px'} minWidth={'70px'}>
                                        {skill.percent}
                                    </Typography>
                                </div>
                                <div className='skill-percent'>
                                    <span style={{ width: skill.percent }}></span>
                                </div>
                            </Box>
                        </Grid>
                    ))
                }
                <Box zIndex={'999'} marginTop={'50px'} width={'100%'}>
                    <Typography data-aos = 'fade-right' data-aos-duration = "2000" color={'#fff'} variant='h3' padding={'10px'} sx={{
                        fontSize: {sm: '48px' , xs: '24px'}
                    }}>
                        Language Skills
                    </Typography>
                </Box>
                {
                    LanguageSkills.map((Language, i) => (
                        <Grid  data-aos = {Language.Aos} data-aos-duration = "2000" item sm={6} xs={12} padding={'10px'} key={i}>
                            <Typography variant='h6' display={'block'} color={'#fff'}>
                                {Language.LanguageName}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingBottom: '50px'
                            }}>
                                <div>
                                    <Typography variant='h6' color={'#a4acc4'} flex={'0 0 60px'} minWidth={'70px'}>
                                        {Language.Fluently}
                                    </Typography>
                                </div>
                                <div className='skill-percent'>
                                    <span style={{ width: Language.Fluently }}></span>
                                </div>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default MySkills