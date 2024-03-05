import React from 'react'
import "./Services.css"

import ComputerIcon from '@mui/icons-material/Computer';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SearchIcon from '@mui/icons-material/Search';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import GroupsIcon from '@mui/icons-material/Groups';

const Services = () => {
    return (

        <div className='services'>
            <h1 className='serv'>Services</h1>
            <div class="container">
                <div class="ra row">
                    <div class="dd col-lg-2">
                        <div className='icc'>    < ComputerIcon  style={{ fontSize: 50 }}/> </div>
                        <div >  <h4 > Web Development</h4></div>
                        <div>  <p>Lorem ipsum, dolor sit amet consectetur<br />Similique veniam maiores laboriosam
                            <br /> voluptas nulla eaque amet praesentium deb</p></div>
                    </div>
                    <div class="dd col-lg-2">
                     <div className='icc'>   <AppSettingsAltIcon style={{ fontSize: 50 }} /></div>
                        <h4>App Development</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur<br />Similique veniam maiores laboriosam
                            <br /> voluptas nulla eaque amet praesentium deb</p>
                    </div>
                    <div class="dd col-lg-2">
                    <div className='icc'>    <AddAPhotoIcon style={{ fontSize: 50 }} /></div>
                        <h4>Photography</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur<br />Similique veniam maiores laboriosam
                            <br /> voluptas nulla eaque amet praesentium deb</p>
                    </div>
                    <div class="dd col-lg-2">
                      <div className='icc'>  <SearchIcon style={{ fontSize: 50 }} /></div>
                        <h4>Seo Marketing</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur<br />Similique veniam maiores laboriosam
                            <br /> voluptas nulla eaque amet praesentium deb</p>
                    </div>
                    <div class="dd col-lg-2">
                        <div  className='icc'><ViewModuleIcon style={{ fontSize: 50 }} /></div>
                        <h4>Responsive Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur<br />Similique veniam maiores laboriosam
                            <br /> voluptas nulla eaque amet praesentium deb</p>
                    </div>
                    <div class="dd col-lg-2">
                       <div className='icc'> <GroupsIcon style={{ fontSize: 50 }}/></div>
                        <h4>Digital Marketing</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur<br />Similique veniam maiores laboriosam
                            <br /> voluptas nulla eaque amet praesentium deb</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services