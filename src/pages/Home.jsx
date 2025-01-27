import React from 'react'
import Nav from "../Sections/Nav"
import ImageSlider from "../Sections/ImageSlider"

const Home = () => {
  return (
    <div>
        <Nav />
        Welcome to Home page
        <a href="/About">
            <button>About Us</button>
        </a>
    </div>
  )
}

export default Home