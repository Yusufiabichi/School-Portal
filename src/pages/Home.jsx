import React from 'react'
import Nav from "../Sections/Nav"
import ImageSlider from "../Sections/ImageSlider"
import OurInfo from '../Sections/OurInfo'
const Home = () => {
  return (
    <div>
        <Nav />
        <ImageSlider />
        Welcome to Home page
        <div>
            <a href="/About">
                <button>About Us</button>
            </a>
        </div>
        <div>
            <a href="/RegistrationPage">
                <button>Register Now</button>
            </a>
        </div>
        <div>
            <a href="/ApplicationPage">
                <button>Apply Now!</button>
            </a>
        </div>
        <OurInfo />
    </div>
  )
}

export default Home