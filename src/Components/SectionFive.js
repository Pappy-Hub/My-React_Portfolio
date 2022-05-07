import React from 'react'
import "../Styles/SectionFive.css"



const SectionFive = () => {
    return (
        <div className='sec5'>
            <h1 className='Contact'>Contact Me</h1> <br /><br />

            <div className='Section-Five-Flex'>

                <div>
                   <p className='fnn'> First name</p>   <p className='lnn'> Last name</p> 
                    <input type="Firstname" placeholder="Enter your firstname" className='input' className='fn'/> <span></span>

                    <input type="Lastname" placeholder="Enter your lasttname" className='input' className='ln'/> <br/> <br />

                    <p className='emm'> Email address</p>
                    <input type="Email address" placeholder="Enter your email address" className='input' className='em'/> <br /> <br />

                    <p className='emm'> Message</p>
                    <input type="Message" placeholder="Enter your message" className='input' className='msg'/> <br /> <br /><br />

                    <button className='btnContact'>SEND MESSAGE</button>
                </div>


                <div>
                    <h5 className='cinfo'>Contact info</h5> <br />
                    <h5 className='addnum'>99, The flip side of life</h5> <br /><br />
                    <h5 className='add'> +234(803)-648-9942</h5>
                    <h5 className='add'> +234(809)-995-96961</h5>
                    <h5 className='add'> +info@mydomain.com</h5>
                    <h5 className='add'> +https://boyshokan.com/</h5>
                </div>
            </div>



        </div>
    )
}

export default SectionFive
