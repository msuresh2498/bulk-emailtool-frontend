import { CardMedia, IconButton } from '@mui/material'
import React from 'react'
import Chart from './chart'
import DoneIcon from '@mui/icons-material/Done';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='Image-container'>
                <div className='home-row1-text'>
                    <h2 className='Image-text'>Free Bulk Email Software</h2>
                    <button className='home-email-btn' onClick={() => navigate('/login')} >Send Email</button>
                </div>
                <div className='home-row1-image'>
                    <CardMedia
                        className='home-card-img'
                        component="img"
                        alt="green iguana"
                        image='https://videosdiebegeistern.com/wp-content/uploads/2019/08/Email-Marketing.jpg'
                    />  </div>
            </div>

            {/* Chart Details */}
            <div className='chart-container'>
                <div>
                    <Chart />
                </div>
                <div className='chart-text'>
                    <h1>3000+ customers join in every month</h1>
                </div>
            </div>

            {/* Security Details */}
            <div className='home-row3'>
                <div className='home-row3-text'>
                    <h1 className='row3-head'>Heavily protected sender reputations</h1>
                    <p className='row3-subhead'>We have a rigorous anti-spam policy to optimize
                        email deliverability for all bulk email senders on our shared IPs.</p>
                    <p className='home-row3-points'><DoneIcon className='home-row3-icon' />Validation process for new users to keep spammers out</p>
                    <p className='home-row3-points'><DoneIcon className='home-row3-icon' />100% opt-in email lists</p>
                    <p className='home-row3-points'><DoneIcon className='home-row3-icon' />Hard bounce addresses automatically blacklisted</p>
                </div>
                <div className='chart-text'>
                    <CardMedia
                        className='home-row3-img'
                        component="img"
                        alt="green iguana"
                        image='https://img.freepik.com/free-vector/cyber-attack-concept-illustration_114360-5905.jpg'
                    />
                </div>
            </div>

            {/* Footer */}
            <div className='footer'>
                <div className='home-footer-row1'>
                    <div >
                        <h1 className='project-name'>BULK Mail</h1>
                    </div>
                    <div>
                        <IconButton className='footer-media-icon1'>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton className='footer-media-icon2'>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className='footer-media-icon3'>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton className='footer-media-icon4'>
                            <YouTubeIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage