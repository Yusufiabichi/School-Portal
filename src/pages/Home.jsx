import React from 'react'
import Nav from "../Sections/Nav"
import ImageSlider from "../Sections/ImageSlider"

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
    </div>
  )
}

export default Home