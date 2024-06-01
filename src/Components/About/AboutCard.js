import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='heading aq'>
            <h1>About us </h1>
            <div className='line'></div>
          </div>
      <div className='aboutCard mtop  '>
        <div className=' row1'>
        <h4 >About us </h4>
          <h1>
            We <span>provide Services</span> to grow your business
          </h1>
          <p>We would like to take this opportunity to introduce ourselves as a Ship chandler in Sfax Tunisia and we are pleased to collaborate together in your trips.</p>
          <p>Our vision is to ensure the total satisfaction of our customer, provide you with products free of taxes and PREMIUM quality and respects the environment in all activities from the purchase to the transport of 
          ships products.</p>
          <a href="#services"><button className='secondary-btn'>
           Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button></a>
        </div>
   
        
        

      </div>
      <div className="containergri">

   

<div className="image-container">
   <img src='/images/safe1.jpg' alt="" />
    <img src='/images/welder.jpg' alt=""/>
   <img src='/images/tech.jpg' alt=""/>
    
  
</div>

</div>
    </>
  )
}

export default AboutCard
