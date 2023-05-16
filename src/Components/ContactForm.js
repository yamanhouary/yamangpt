import { Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { emailForm } from './utils/Constants'
import '../App.css'
import ContactInf from './ContactInf';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jpd3ozr', 'template_llvhaph', form.current, '4xtvUoHwJqaVJR15q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <Grid container paddingBottom={'80px'} >
            <Grid data-aos = "fade-up" data-aos-duration = "2000" item md={6} xs={12}>
                <Typography variant='h4' color={'#fff'}>
                    Get In Touch
                </Typography>
                <form onSubmit={sendEmail} ref={form} style={{ marginTop: '30px' }}>
                    {
                        emailForm.map((item, i) => (
                            <div key={i} style={{ position: 'relative', width: '100%', margin: '35px 0' }}>
                                <label style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '20px',
                                    color: '#a4acc4',
                                    backgroundColor: '#10121b',
                                    padding: '0 10px',
                                    fontSize: '14px',
                                    letterSpacing: '1px'
                                }}>
                                    {item.label}
                                </label>
                                <input name={item.name} className='input-field' type={'text'} style={{
                                    width: '100%',
                                    backgroundColor: '#10121b',
                                    border: '1px solid #2e344e',
                                    padding: '15px 15px',
                                    color: '#a4acc4',
                                    fontSize: '16px',
                                }} />
                            </div>
                        ))
                    }
                    <div style={{ position: 'relative', width: '100%' }}>
                        <label style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '20px',
                            color: '#a4acc4',
                            backgroundColor: '#10121b',
                            padding: '0 10px',
                            fontSize: '14px',
                            letterSpacing: '1px'
                        }}>
                            Enter your messege*
                        </label>
                        <textarea name='messege' className='input-field' style={{
                            width: '100%',
                            backgroundColor: '#10121b',
                            height: '200px',
                            border: '1px solid #2e344e',
                            padding: '15px',
                            color: '#a4acc4',
                            fontSize: '16px',
                            lineHeight: '24px'
                        }}></textarea>
                    </div>
                    <input type={'submit'} className='Input-submit'/>
                </form>
            </Grid>
            <Grid item md={6} xs={12}>
                <ContactInf />
            </Grid>
        </Grid>
    )
}

export default ContactForm