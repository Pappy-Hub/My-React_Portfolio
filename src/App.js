import React from 'react'
import "./App.css"
import Home from "./Pages/Home";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Services from './Pages/Services';
import { BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Header />
          {/* <Home /> */}

        <Switch>
          <Router exact path="/">
            <Home />
          </Router>

          <Router path="/Contact">
            <Contact />
          </Router>

          <Router path="/Resume">
            <Resume />
          </Router>

          <Router path="/Portfolio">
            <Portfolio />
          </Router>

          <Router path="/About">
            <About />
          </Router>

          <Router path="/Services">
            <Services />
          </Router >

          <Router path="/Footer">
            <Footer />
          </Router>
        </Switch >

      </div>
    </Router >

  )

}

export default App;
