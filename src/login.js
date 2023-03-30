import { Card, Link, TextField } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API } from './global';

//Form Validation using YUP
const formValidationSchema = Yup.object({
    email: Yup.string().min(6).required("Email is Required🙂"),
    password: Yup.string().min(8).required("Need bigger Password🙂"),
});


const Login = () => {
    
    const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        //Login Authendication
        validationSchema: formValidationSchema,
        onSubmit: async (data) =>{
            await axios.post(`${API}/login`, data)
                .then(res => {
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    alert('login successfully')
                    navigate('/email')
                })
                .catch(err => {
                    toast.error(err.response.data)
                })

        },
    })

    const navigate = useNavigate();

    return (
        <div className='login-page'>
            <Card className='login-card'>
                <div className='login-container'  >
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h3 className='login-text'>Login</h3>

                        <TextField className="login-textfield"
                            label="UserName"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email ? errors.email : null}
                            variant="outlined" />

                        <TextField className="login-textfield"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            error={touched.password && errors.password}
                            helperText={touched.password && errors.password ? errors.password : null}
                            variant="outlined" />


                        <button variant="contained" type='submit' className='login-btn' >Login</button>
                        <div className='login-btn2'>
                            <p className='login-donthave-text'>Dont have an account?<Link className='login-btns' variant="text" onClick={() => navigate('/signup')}>Register</Link></p>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default Login