import React from 'react'
import "./Projects.css"
const Projects = () => {
    return (
        <>
           <h1 className='my_title'>My Projects</h1>

            <div className='project'>
                <div className='row_r'>
                    <div className='roow_min'>

                        <h1 >HTML | CSS</h1>
                        <p >(Both Serious And Fun!)</p>

                        <h3 >Founder, Editor-In-Chief</h3>
                        <button class="button-1">Visit</button>

                    </div>
                    <div >
                        <p >HTML is the standard markup language for creating web pages
                            and web applications. It provides the structure of the content
                            on a web page by using a system of tags and attributes.

                            CSS is used for styling the HTML elements. It allows you
                            to control the layout, colors, fonts, and
                            other visual aspects of a web page.
                            The Sideline Post is the first-ever centralized platform for college athletes,
                            like me, to share their stories through their own words.
                        </p>

                    </div>
                </div>
                <div className='row_r'>
                    <div className='roow_min'>

                        <h1 >REACT.JS</h1>
                        <p>(Both Serious And Fun!)</p>

                        <h3>Founder, Editor-In-Chief</h3>
                        <button class="button-1">Visit</button>

                    </div>
                    <div > <p >HTML is the standard markup language for creating web pages
                        and web applications. It provides the structure of the content
                        on a web page by using a system of tags and attributes.

                        CSS is used for styling the HTML elements. It allows you
                        to control the layout, colors, fonts, and
                        other visual aspects of a web page.
                        The Sideline Post is the first-ever centralized platform for college athletes,
                        like me, to share their stories through their own words.
                    </p></div>
                </div>
            </div>
        </>
    )
}

export default Projects