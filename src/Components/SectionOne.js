import React from 'react'

import pappy1 from "../images/desktop/pappy1.JPG"
import "../Styles/SectionOne.css"

const SectionOne = () => {
    return (
        <div className='sec1'>
            <div className='Section-One-Flex'>
                <div>
                    <img src={pappy1} alt="pappy_sec1" className='Boyshokan2' />

                </div>
                <article>

                    <h1>My Bio</h1>
                    <p> Founded in 2011, Loopstudios has been producing world-class <br /> virtual reality projects for some of the best companies around the <br /> globe. Our award-winning creations have transformed <br /> businesses through digital experiences that bind to their brand.</p>


                    <h3>Design</h3>
                    <hr />
                    <h3>HTML5</h3>
                    <hr />
                    <h3>CSS5</h3>
                    <hr />
                    <h3>Bootstrap</h3>
                    <hr />
                    <h3>ReactJS</h3>
                    <hr />

                    <button className='btn-hire'>HIRE ME</button> <button className='btn-dload'>DOWNLOAD CV</button>

                </article>


            </div>

        </div>



    )
}

export default SectionOne

