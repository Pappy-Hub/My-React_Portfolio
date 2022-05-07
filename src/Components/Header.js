import React from 'react'
import Navbar from './Navbar'
import "../Styles/Header.css"
import '../images/desktop/pappybg.svg'

export const Header = () => {
    return (
    <div className='Link-Header'>
     <header>
            <Navbar />
            <h1><span className='p1'>I am Pappy</span> <br />
               <span className='p2'><marquee behavior="scroll" direction="">A Front-end Developer</marquee> </span> </h1>


        </header>
    </div>
   
    )
}

export default Header