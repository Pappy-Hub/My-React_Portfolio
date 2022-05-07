import React from 'react'
import "../App.css"
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
// import LOGO from "../images/logo.svg"



const Navbar = () => {

  // window.onscroll = () => {
  //   let scroll = document.querySelector("navbarSupportedContent")
  //   scroll.style.backgroundColor = "white"

  // }

  // const Home = () => {
  //   window.scrollBy(660, 180);
  //   console.log(window.screen.height);

  // }

  // const About = () => {
  //   window.scrollBy(660, 250);
  //   console.log(window.screen.height);

  // }

  // const Portfolio = () => {
  //   window.scrollBy(660,400);
  //   console.log(window.screen.height);

  // }

  // const Services = () => {
  //   window.scrollBy(660, 600);
  //   console.log(window.screen.height);

  // }

  // const Resume = () => {
  //   window.scrollBy(660, 180);
  //   console.log(window.screen.height);

  // }

  // const Contact = () => {
  //   window.scrollBy(660, 180);
  //   console.log(window.screen.height);

  // }

  return (

    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <h2 class='name'>Pappy</h2>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto animate__animated animate__bounce">

          <li class="nav-item active">
            <a class="nav-link" href="#"><Link to='/about'>Home</Link><span class="sr-only"></span></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to='/about'>About</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to='/portfolio'>Portfolio</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to='/services'>Services</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to='/resume'>Resume</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to='/contact'>Contact</Link></a>
          </li>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar