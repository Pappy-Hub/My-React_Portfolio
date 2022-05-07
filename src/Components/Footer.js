import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <footer>

            <div className='Footer-Flex'>
                <div>
                    <h5>About Me</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><br />
                    <h5>Connect</h5>
                    <ul className='icon'>
                        <li>icons</li>
                        <li>icons</li>
                        <li>icons</li>
                        <li>icons</li>
                        <li>icons</li>
                    </ul>

                </div>

                <div>

                    <h5>Navigation</h5> <br />
                    <h5>HTML5</h5>
                    <h5>CSS3</h5>
                    <h5>JQuery</h5>
                    <h5>BootStrap</h5>
                    <h5>ReactJS</h5>
                    <h5>javascript</h5>
                </div>

                <div>
                    <h5>Services</h5><br />

                    <h5>Web Design</h5> <br />
                    <h5>eCommerce</h5>
                    <h5>Mobile Apps</h5>
                    <h5>Frontend</h5>

                </div>

                <div>
                    <h5>Contact info</h5> <br />
                    <h4>99, The flip side of life</h4>
                    <h4>+1(123)-456-7890</h4>
                    <h4>+1(123)-456-7890</h4>
                    <h4>info@mydomain.com</h4>
                    <h4>https://boyshokan.com/</h4>
                </div>

            </div>
        </footer>
    )
}

export default Footer
