import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='conta'>
     
        <div className='form'>
        <h1 className='dfs'>Contact Us</h1>
          <input className='place' type="text" placeholder='Name' />
        <input className='place' type="email" placeholder='Email'/>
        <input className='place' type="" placeholder='Phone Number'/>
        
        <textarea className='mess' placeholder='Message' name="" id="" cols="90" rows="4"></textarea>
        <button className='subb'>Submit</button>
        </div>
       <div className='loca'>
        <iframe className='locat' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.677842130349!2d72.84761690015424!3d19.15058737528404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b644e5d96a79%3A0x965a4cd0f5dd7257!2sMumbai%2C%20Maharashtra%20400104!5e0!3m2!1sen!2sin!4v1707837365208!5m2!1sen!2sin"></iframe>
        </div> 
    </div>
  )
}

export default Contact