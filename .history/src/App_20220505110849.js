import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { 
  Home, 
  About, 
  Contact,  
  Features, 
  FAQs, 
  Team, 
  Roadmap,  
  Error
} from "./components";
import './components/Style.css';
import { House, Group, ContactSupport, Map, Help, Extension, EmojiObjects, ArrowForward } from '@material-ui/icons'; // Twitter
// import { Icon } from '@iconify/react'; Discord
import Logo from './components/images/3DPrintable_Logo_WhiteType.png'; // Logo
import Privacy_Policy from './components/Documents/3DPRINTABLE PRIVACY POLICY.pdf';
import Terms from './components/Documents/3DPRINTABLE TERMS AND CONDITIONS.pdf';

const App = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    
    const closeMenu = () => {
      setNavbarOpen(false)
    }

  return (

    <div className="App">

      {/* Start Loader */}
      <div id="preloader">
            <div id="status">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
            </div>
        </div>
        {/* End Loader */}

        {/* Start Navbar */}
		  <header id="topnav" class="defaultscroll sticky">
				<div class="container">
					{/* Start Logo */}
						<a class="logo" href="/">
                            <span class="logo">
                                <img src={Logo} alt="Logo"></img>
                            </span>
						</a>
                    {/* End Logo */}

                    {/* Start mobile */}
                    <div class="menu-extras">
                        <div class="menu-item">
                            <a href="#/" onClick={handleToggle}>{navbarOpen}
                                <div class="toggle-container">
                                    <div class="bar1"></div>
                                    <div class="bar2"></div>
                                    <div class="bar3"></div>
                                </div>
                            </a>

                            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""} hideBar`}>
                                <li><House /><a href='/'>Home</a></li>
                                <li><EmojiObjects/><a href="About" class="sub-menu-item"> About </a></li>
                                <li><Extension/><a href="Features" class="sub-menu-item"> Features</a></li>
                                <li><Group/><a href="Team" class="sub-menu-item"> Team</a></li>
                                <li><Map/><a href="Roadmap" class="sub-menu-item"> Roadmap</a></li>
                                <li><Help/><a href="FAQs" class="sub-menu-item">FAQs </a></li>
                                <li><ContactSupport/><a href="Contact" class="sub-menu-item">Contact Us</a></li>
                                <li><ArrowForward/><a href="https://app.3dprintable.io" target="_blank" rel="noopener noreferrer" id="a">Enter App</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* End mobile */}
                    

                    {/* Start navigation */}
                    <div id="navigation">
                        <ul class="navigation-menu nav-right nav-light">
                                <li>
                                    <a href="/" class="sub-menu-item">
                                        <button class="btns btns-outline-header">
                                            Home
                                        </button>
                                    </a>
                                </li>
                                
                                <li class="has-submenu parent-parent-menu-item">
                                        <a href="/#" id="a">
                                            <button type="button" class="btns btns-outline-header dropdown-toggle" aria-haspopup="true">
                                                Pages
                                            </button>
                                        </a>
                                        
                                        <ul class="submenu" >
                                            <li><a href="About" class="sub-menu-item"> About</a></li>
                                            <li><a href="Features" class="sub-menu-item"> Features</a></li>
                                            <li><a href="Team" class="sub-menu-item"> Team</a></li>
                                            <li><a href="Roadmap" class="sub-menu-item"> Roadmap</a></li>
                                            <li><a href="FAQs" class="sub-menu-item">FAQs </a></li>
                                            <li><a href="Contact" class="sub-menu-item">Contact Us</a></li>
                                        </ul>
                                </li>
                            <li>
                                <a href="https://app.3dprintable.io" target="_blank" rel="noopener noreferrer" id="a" >
                                    <button class="btn btn-primary">Enter App</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* End navigation */}
				</div>
		    </header>
            {/* End NavBar */}

            <BrowserRouter>
            <Routes>    
                <Route path="/" element={<Home/>} onClick={() => closeMenu()}/>
                <Route path="/about" element={<About/>} onClick={() => closeMenu()}/>
                <Route path="/contact" element={<Contact/>} onClick={() => closeMenu()}/>
                <Route path="/features" element={<Features/>} onClick={() => closeMenu()}/>
                <Route path="/faqs" element={<FAQs/>} onClick={() => closeMenu()}/>
                <Route path="/team" element={<Team/>} onClick={() => closeMenu()}/>
                <Route path="/roadmap" element={<Roadmap/>} onClick={() => closeMenu()}/>
                <Route path="/error" element={<Error/>} onClick={() => closeMenu()}/>
            </Routes>
            </BrowserRouter>

            {/* Start Footer */}
            <footer class="bg-footer">
                <div class="container-fluid px-0">
                    <div class="py-4">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <div class="section-title">
                                        <div class="d-flex">
                                            <i class="uil uil-envelope-star display-4 text-white title-dark"></i>
                                            <div class="flex-1 ms-md-4 ms-3">
                                                <h4 class="fw-medium text-light title-dark mb-1">Get the latest 3DPrintable news in your inbox.</h4>
                                                <p class="text-white-50 mb-0">Sign up and receive update to date news via email.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 mt-4 mt-sm-0">
                                    <div class="text-md-end ms-5 ms-sm-0">
                                        <a href="/#" id="a" class="btn btn-primary">Subscribe Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-py-30 footer-border-top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-sm-8">
                                <div class="text-sm-start text-center">
                                    <p class="mb-0 text-foot">© 2022 3DPrintable, All rights reserved. </p>
                                    <ul class="list-unstyled footer-list mt-4">
                                       <li><a href={Privacy_Policy} target="_blank" rel="noopener noreferrer" class="sub-menu-item">Privacy Policy</a></li>
                                       <li><a href={Terms} target="_blank" rel="noopener noreferrer" class="sub-menu-item">Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </div>
    );
}

export default App;