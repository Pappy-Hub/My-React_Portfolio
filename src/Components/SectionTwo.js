import React from 'react'
import "../Styles/SectionTwo.css"
import Port1 from "../images/desktop/image-deep-earth.jpg"

import Port2 from "../images/desktop/image-grid.jpg"
import Port3 from '../images/desktop/image-fisheye.jpg'

import Port4 from "../images/desktop/image-night-arcade.jpg"

import Port5 from "../images/desktop/image-soccer-team.jpg"
import Port6 from '../images/desktop/image-pocket-borealis.jpg'
// import { Link } from 'react-router-dom'


const SectionTwo = () => {
    return (
        <div className="SectionTwo">


            <div className="Section-Two">
                <div>
                    <h1 className='port'>My Portfolio</h1> <br />
                    <ul>
                        <li><a href="all">All</a></li>
                        <li><a href="package">Package</a></li>
                        <li><a href="mockup">Mockup</a></li>
                        <li><a href="typography">Typography</a></li>
                        <li><a href="photograph">Photography</a></li>
                    </ul>
                </div> <br />


                {/*                  
                                    
                    <div><img src={img4} alt="logo" /><span className="Img-text">FROM UP<br></br>ABOVE VR</span></div>
                    <div><img src={img8} alt="logo" /><span className="Img-text">POCKET<br></br>BOREALIS</span></div>
                    <div><img src={img6} alt="logo" /><span className="Img-text">THE<br></br>CURIOSITY</span></div>
                    <div><img src={img3} alt="logo" /><span className="Img-text">MAKE IT<br></br>FISHEYE</span></div>
                </div> */}

                <div class="grid">
                    <div className='PP'><img src={Port1} alt="Port1" /></div>
                    <div className='PP'><img src={Port2} alt="Port2" /></div>
                    <div className='PP'><img src={Port3} alt="Port3" /></div>
                    <div className='PP'><img src={Port4} alt="Port4" /></div>
                    <div className='PP'><img src={Port5} alt="Port5" /></div>
                    <div className='PP'><img src={Port6} alt="Port6" /></div>
                 
                </div>
            </div>
        </div>



    )
}

export default SectionTwo
