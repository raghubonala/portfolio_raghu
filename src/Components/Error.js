import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'><h4>This page doesn't seem to exist.</h4>
    <div className='eror_btn'><button className='button-1'><Link to="/">Go Back</Link></button></div>
    </div>
  )
}

export default Error