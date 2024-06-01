import React, { useState,useEffect } from "react"
import Data from "./Data"
import Typed from "typed.js"; 


const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
 
// Create a new component for the Typed text

  useEffect(() => {
    // Initialize Typed.js effect within this component
    const typed = new Typed(".auto-type", {
      strings: ["Services","Experties"],
      typeSpeed: 250,
      backSpeed: 200,
      loop: true,
    });

    // Clean up the Typed instance when this component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

 
  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button> 
        </div>
        
        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (
              <>
                <img src={slide.image} alt='HomeImage' />
                <div className="slide-text ">
                  <h1>Welcome To <span className="cercina"> Cercina <span className="auto-type" ></span></span></h1>
                  <p>We provide top-quality shipping containers and supplies for all your shipping needs.</p>
                  <button className="cta-button"><a href="#services"> Explore Our Services</a></button>
                </div>
              </>
            )}
          </div>
          )
        })}<div id="abo"></div>
      </section>

      
    </>
  )
}

export default Home
