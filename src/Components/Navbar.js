import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Navbar = () => {
const [first, setfirst] = useState(true)

const ss = () => {

setfirst(!first)

}

    return (
        <>
            <div className='nav'>
                <div className='logoname'>

                    <Link to='/'> <h1>Raghu</h1></Link>
                </div>

                <div className='menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/project'>Project</Link>
                    <Link to='/contact'>Contact</Link>

                    <div className='hireme'>
                        <Link className='hir' to='/'>Hire Me</Link>

                    </div>

                </div>
                <div onClick={ss} className='search'>
                    <ion-icon name="search-outline"></ion-icon>
                </div>





            </div>


     {first? null:
       <div className='searchbar'>
       <div className='secondiv'>
           <input className='navinp' type="text" name="" />
       </div>
   
   </div>
     }






            <div className='real'>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Services</Link>
                <Link to='/'>Project</Link>
                <Link to='/'>Contact</Link>
            </div>
        </>
    )
}

export default Navbar