import React from 'react'
import PropTypes from 'prop-types'
import "./About.css"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import AnchorIcon from '@mui/icons-material/Anchor';
import AndroidIcon from '@mui/icons-material/Android';
import Alert from '@mui/material/Alert';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'green' : '#308fe8',
  },
}));


const About = props => {
  return (
    <>
    <div className='container-flued'>
    <div className='about'>
      <div className='photodiv'>
        <img className='photo' src="https://wp.w3layouts.com/ui-portfolio/wp-content/themes/ui-portfolio/assets/images/about.jpg" alt="phot" />
      </div>
      <div className='divtwo'>
        <div className='dea'>
         
          <h1 className='me'>A Few Words About Me</h1>
          <h4 style={{fontWeight:'150'}}>I love Graphic design and Photography and have been working 
            on my portfolio since 2016. 
            I Can give your business a new Cxreative start right away! 
            Contact me and we will discuss your projects!</h4>
          


          <h5>Having O6 Years of Experience. I Would Love to make your Ideas real.
           I Can give your business a new Creative start right away!</h5>
        </div>
        <div className='uiux'>
          <h5 style={{fontWeight:'250'}}>UI/UX Design</h5>

          <div className='ek'>
            <div className='ekek'></div>
          </div>
        <h5 style={{fontWeight:'250'}}>Ideas & Technology</h5>
          <div className='ek'>
            <div className='ekek'></div>
          </div>
        <h5 style={{fontWeight:'250'}}> Branding Design</h5>
          <div className='ek'>
            <div className='ekek'></div>
          </div>
          <h5 style={{fontWeight:'250'}}>Responsive Web Design</h5>
          <div className='ek'>
            <div className='ekek'></div>
          </div>

        </div>
      </div>
    </div>
    </div>
    </>
  )
}

About.propTypes = {}

export default About