import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"

import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
         {/* {  <Route path='/about' exact component={About} /> }
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
