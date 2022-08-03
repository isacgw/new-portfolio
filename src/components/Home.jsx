import React from 'react'
import ProfileImage from '../assets/Profile-Image.png'
import '../styles/Home.css'
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFacebookMessenger } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import ObiWan from '../assets/obi-wan.png'

const Home = () => {
  return (
    <section id='header'>
    <header>
        <div className="content">
        <h2>Hello there!</h2>
        <img className='obi-wan' src={ObiWan} alt="" />
        <h4>I’m Isac Geisewall, Junior Frontend Developer and UX/UI-designer.</h4>
        <p>...and if you look closely in the background you’ll see the things I like outside of work!</p>
        <button className='btn-primary'>Download CV</button>
        </div>
        <div className="img">
            <div className="img-container">
                <img src={ProfileImage} alt="" />
            </div>
            <div className="social-icons">
                <FaGithub />
                <FaLinkedin />
                <IoLogoWhatsapp />
                <FaFacebookMessenger />
            </div>
        </div>
    </header>
    </section>
  )
}

export default Home