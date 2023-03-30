import { TextField } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


//form Validation
const formValidationSchema = Yup.object({
    name: Yup.string().max(25).required("name is Required🙂"),
    email: Yup.string().min(6).required("Email is Required🙂"),
    password: Yup.string().min(8).required("Need bigger Password🙂"),
    repassword: Yup.string().min(8).required("Need bigger Password🙂"),
});

const Signup = () => {

    const navigate = useNavigate();

    const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repassword: ""
        },
        //User Registration
        validationSchema:formValidationSchema ,
        onSubmit: data => {
            axios.post("http://localhost:5000/signup", data)
                .then(res => navigate('/login'))
                .catch(err => {
                    toast.error(err.response.data);
                })
        }

    })

    return (
        <div className='login-page'>
            <div className='login-card'>
                <div className='login-container'  >
                    <Form className='login-form' onSubmit={handleSubmit}>
                        <h3 className='login-text'>Register</h3>
                        <TextField className="login-textfield"
                            label="name"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                            error={touched.name && errors.name}
                            helperText={touched.name && errors.name ? errors.name : null}
                            variant="outlined" />

                        <TextField className="login-textfield"
                            label="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email ? errors.email : null}
                            variant="outlined" />

                        <TextField className="login-textfield"
                            label="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            error={touched.password && errors.password}
                            helperText={touched.password && errors.password ? errors.password : null}
                            variant="outlined" />



                        <TextField className="login-textfield"
                            label="repassword"
                            name="repassword"
                            onChange={handleChange}
                            value={values.repassword}
                            onBlur={handleBlur}
                            error={touched.repassword && errors.repassword}
                            helperText={touched.repassword && errors.repassword ? errors.repassword : null}
                            variant="outlined" />

                        <button variant="contained" type='submit' className='login-btn' >Register</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Signup