import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Alert from '@mui/material/Alert';


const EmailSending = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [numberofemail, setNumberofEmail] = useState("");
    const [show, setShow] = useState(false)

    // Email Data Fetching frontend to the Backend
    const sendEmail = async (event) => {
        event.preventDefault();
        const result = await fetch('http://localhost:5000/email', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, subject, message, numberofemail })
        })

        const data = await result.json();
        if (data.status === 201 || !data) {
            console.log("error");

        } else {
            console.log("Email sent");
            setShow(true)
            setEmail("");
            setMessage("")
            setSubject("")
            setNumberofEmail("")
        }
    }

    return (
        <div>
            {
                show ? <Alert severity="success">Email send Successfully</Alert> : null
            }

                {/* Email Form */}
                
            <Form className='email-form' onSubmit={sendEmail}>
                <h2 className='Email-head'>New Message</h2>
                <TextField
                    className="email"
                    label="to Email (abc@gmail.com,abc2@gmail.com)"
                    name="email"
                    value={email}
                    variant="filled"
                    onChange={(e) => setEmail(e.target.value)} />

                <TextField
                    className="subject"
                    label="Subject"
                    name="subject"
                    value={subject}
                    variant="filled"
                    onChange={(e) => setSubject(e.target.value)} />

                <TextField
                    className="NumberofEmail"
                    label="Number of Email (numbers)"
                    name="numberofemail"
                    value={numberofemail}
                    variant="filled"
                    onChange={(e) => setNumberofEmail(e.target.value)} />

                <TextField
                    id="filled-multiline-static"
                    label="Message"
                    name='message'
                    value={message}
                    multiline
                    rows={5}
                    variant="filled"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button variant="contained" type='submit' className='email-btn' onClick={sendEmail} >Send</button>
            </Form>
        </div>
    )
}

export default EmailSending;