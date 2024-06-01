import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        
        <div className='container grid'>
         
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We would like to take this opportunity to introduce ourselves as a Ship chandler in Sfax Tunisia and we are pleased to collaborate together in your trips.</p> <br></br>
          <p>Our vision is to ensure the total satisfaction of our customer, provide you with products free of taxes and PREMIUM quality and respects the environment  <br></br>in all activities from the purchase to the transport of 
          ships products.</p>
          
          <div className='  foot-cont '>
            <div className=' flex'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <p className="aa" >Monday - Sunday: 24H / 24H</p>
              </div>
            </div>
            <div className='  flex'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <p className="aa" >+216 56 553 000</p>
              </div>
            </div>
            <div className='flex'>
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

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
            <li>
              <a href='#ome'> Home
              </a>
            </li>
            <li>
              <a href='#abo'> About us
              </a>
            </li>
           
            <li>
            <a href='#services'>
                Services
              </a>
            </li>
            
            <li>
            <a href='#test'>Testimonial
              </a>
            </li>
            <li>
              <a href='#cont'>
                Contact Us
              </a>
            </li>
          </ul>
          </div>


        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
