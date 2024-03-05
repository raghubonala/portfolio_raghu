import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className='footer'>

            <div className='one'>
               <Link to='/'><h3> Portfolio</h3></Link>

            </div>
            <div className='two'>
                <div className='num'> <ion-icon name="call-outline"></ion-icon><span>+918268666658</span></div>
                <div className='num'><ion-icon name="mail-outline"></ion-icon><span>raghubonala1@gmail.com</span></div>
                <div className='num'> <ion-icon name="location-outline"></ion-icon><span> Goregaon (w)</span></div>
             <div className='two'>   <p  className='nula'>Mumbai 400 - 104</p></div>
            </div>
            <div className='three'>
                <div className='da'>
                    © 2024 UI Portfolio. All Rights Reserved | WordPress Theme by
                </div>
                <div className='last'>
                    <div className='rounded'><ion-icon name="logo-facebook"></ion-icon></div>
                    <div className='rounded'>
                        <ion-icon name="logo-twitter"></ion-icon>
                    </div>
                    <div className='rounded'><ion-icon name="logo-google"></ion-icon></div>
                    <div className='rounded'><ion-icon name="logo-instagram"></ion-icon></div>
                </div>
            </div>

        </div>
    )
}

export default Footer