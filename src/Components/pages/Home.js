import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
/* import MostPopular from "../HomeSection/popular/MostPopular" */
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
/* import Gallery from "../HomeSection/gallery/Gallery" */
import Contactform from "../HomeSection/contactform/contactform"
const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      {/* <MostPopular /> */}
      <DestinationHome />
      <Download />

      <Contactform />
          <Works /> 
     {/*   <Gallery />  */}
    </>
  )
}

export default Home
