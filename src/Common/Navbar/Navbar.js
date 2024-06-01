import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logod from "../../logoDali-removebg-preview.png"
import cer from "../../cer-title.png"
const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
     <div id="ome"></div>
      <nav  className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href='#ome' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href='#abo' onClick={closeMobileMenu}>
                About us
              </a>
            </li>
           
            <li>
            <a href='#services' onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            
            <li>
            <a href='#test' onClick={closeMobileMenu}>
                Testimonial
              </a>
            </li>
            <li>
              <a href='#cont' onClick={closeMobileMenu}>
                Contact Us
              </a>
            </li>
          </ul>

          <div className='login-area flex'>
           {/*  <li>
              <Link to='/sign-in'>
                <i class='far fa-chevron-right'></i>Sign in
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i class='far fa-chevron-right'></i>Register
              </Link>
            </li> */}
            <li>
              <a href='#cont'>
                <button className='primary-btn contli'>CONTACT US  </button>
              </a>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src={logod} alt=''  className="era"/>
            {/* <img src={cer} alt=''  className="era1"/> */}
             <h1> Cercina</h1>  
          </div>

          <div className='contact ze flex_space '>
            <div className='box ze flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <p className="aa" >Monday - Sunday: 24H / 24H</p>
              </div>
            </div>
            <div className='box ze  flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <p className="aa" >+216 56 553 000</p>
              </div>
            </div>
            <div className='box  ze flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <p className="aa" >Management@cercina.net</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
