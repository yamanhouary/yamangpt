import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import { Grid } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SidebarMenu from './Components/SidebarMenu'
import SidebarPhones from './Components/SidebarPhones'
AOS.init();

const App = () => {


  return (
    <BrowserRouter>
      <Grid container>
        <Grid item lg={2} xs={0} sx={{
          display: { lg: 'flex', md: 'none', xs: 'none' },
          position: 'fixed',
          top: '0',
          left: '0',
          backgroundColor: '#1c1f2c',
          minHeight: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Sidebar />
        </Grid>
        <Grid item lg={10} xs={12} sx={{
          width: '100%',
          position: 'absolute',
          right: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
          <div className='VerticalLines'>
            <span style={{ left: '30%' }}></span>
            <span style={{ left: '50%' }}></span>
            <span style={{ left: '70%' }}></span>
            <span style={{ left: '90%' }}></span>
          </div>
            <Grid zIndex={'999'} item sx={{
              display: { lg: 'none', xs: 'flex' },
              position: 'fixed',
              left: '0',
            }}>
              <SidebarPhones />
            </Grid>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App