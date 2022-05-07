import React from 'react'
import "../Styles/SectionFour.css"
import pappy1 from "../images/desktop/pappy1.JPG"

const SectionFour = () => {
    return (
        <div className='Sec4'>

            <div>
                <h1 className='resume'>Resume</h1> <br /> <br />
            </div>

            <div className='Section-Four-Flex'>
                <div>
                    <img src={pappy1} alt="Boyshokan" className="Boyshokan"/>
                </div>

                <div>
                    <h4>Work Experience</h4> <br />
                    <h5>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5>Work Position</h5>
                    Lorem ipsum dolor sit amet. <br /><br /> <br />


                    <h4>Education</h4> <br />
                    <h5>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5>Work Position</h5>
                </div>
                <div>
                    <h5 className='ts'>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5 className='ts'>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5 className='ts'>Work Position</h5> <br /><br /> <br /><br /><br /> <br /> <br /><br /> <br /> <br />
                    Lorem ipsum dolor sit amet.

                    <h5 className='ts'>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                    <h5 className='ts'>Work Position</h5>
                    Lorem ipsum dolor sit amet.
                   
                </div>

                
            </div>

        </div>
    )
}

export default SectionFour
